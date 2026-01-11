# gold_monthly_all_years_INR.py
# Run: python gold_monthly_all_years_INR.py
# Requirement: pip install pandas requests

import pandas as pd
import requests
from io import StringIO

# Gold price (monthly USD per troy ounce)
GOLD_URL = "https://raw.githubusercontent.com/datasets/gold-prices/main/data/monthly.csv"

# USD to INR monthly average (FRED – official source)
USDINR_URL = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=AEXINUS"

def download_csv(url):
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    return r.text

def main():
    print("Downloading gold prices...")
    gold_csv = download_csv(GOLD_URL)
    gold_df = pd.read_csv(StringIO(gold_csv))
    gold_df.columns = ["Date", "Gold_USD_per_oz"]
    gold_df["Date"] = pd.to_datetime(gold_df["Date"], format="%Y-%m")

    print("Downloading USD → INR rates...")
    fx_csv = download_csv(USDINR_URL)
    fx_df = pd.read_csv(StringIO(fx_csv))
    fx_df.columns = ["Date", "USDINR"]
    fx_df["Date"] = pd.to_datetime(fx_df["Date"])

    # Convert FX to month format
    fx_df["Date"] = fx_df["Date"].dt.to_period("M").dt.to_timestamp()

    # Merge both datasets
    df = pd.merge(gold_df, fx_df, on="Date", how="inner")

    # Conversion
    OZ_TO_GRAM = 31.1034768
    df["INR_per_10g"] = (df["Gold_USD_per_oz"] / OZ_TO_GRAM) * 10 * df["USDINR"]

    # Add Year & Month
    df["Year"] = df["Date"].dt.year
    df["Month"] = df["Date"].dt.month

    # Round values
    df["INR_per_10g"] = df["INR_per_10g"].round(2)

    # Save FULL data
    df.to_csv(
        "gold_monthly_all_years_INR_per_10g.csv",
        index=False,
        date_format="%Y-%m"
    )

    # Save year-wise files
    for year in sorted(df["Year"].unique()):
        df[df["Year"] == year][["Date", "INR_per_10g"]].to_csv(
            f"gold_{year}_INR.csv",
            index=False,
            date_format="%Y-%m"
        )

    print("✅ SUCCESS!")
    print(f"Years covered: {df['Year'].min()} to {df['Year'].max()}")
    print("Files created:")
    print("- gold_monthly_all_years_INR_per_10g.csv")
    print("- gold_YYYY_INR.csv (year-wise)")
    print("\nSample output:")
    print(df.head(12))

if __name__ == "__main__":
    main()
