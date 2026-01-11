# gold_monthly_2010_to_present.py
# Usage: python gold_monthly_2010_to_present.py
# Requirement: pip install pandas requests

import pandas as pd
import requests
from io import StringIO
from datetime import datetime

# Raw CSV (GitHub datasets repo) - monthly gold price in USD per troy ounce
RAW_CSV_URL = "https://raw.githubusercontent.com/datasets/gold-prices/main/data/monthly.csv"

def download_csv(url):
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    return r.text

def main():
    print("Downloading monthly gold prices CSV...")
    csv_text = download_csv(RAW_CSV_URL)
    df = pd.read_csv(StringIO(csv_text), header=None, names=["Date", "Price"])
    # The dataset sometimes has a header; try to parse dates robustly:
    # If Date column includes "Date" text (header row), drop it:
    df = df[df['Date'].str.contains(r'^\d{4}-\d{2}')]
    df['Date'] = pd.to_datetime(df['Date'], format="%Y-%m")
    df = df.sort_values('Date').reset_index(drop=True)

    # Filter from 2010-01 to latest
    start = pd.Timestamp(year=2010, month=1, day=1)
    df = df[df['Date'] >= start].copy()

    # Write combined CSV
    df.to_csv("gold_monthly_2010_to_present_usd_per_oz.csv", index=False, date_format="%Y-%m")

    # Also write one CSV per-year (e.g., gold_2010.csv)
    df['Year'] = df['Date'].dt.year
    df['Month'] = df['Date'].dt.month
    for year, group in df.groupby('Year'):
        g = group[['Date','Price']].copy()
        g.to_csv(f"gold_{year}.csv", index=False, date_format="%Y-%m")
    print("Saved gold_monthly_2010_to_present_usd_per_oz.csv and gold_{year}.csv files (one per year).")
    print("Sample rows:")
    print(df.head(12).to_string(index=False))

if __name__ == "__main__":
    main()
