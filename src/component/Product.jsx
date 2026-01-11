import React, { useState } from "react";
function Product() {
    const [data, setdata] = useState(["vinod", "bharath",
        "luffy", "zoro",]);

    const [details, setdetails] = useState([
        {
            name: "vinod",
            age: 22
        },
        {
            name: "bharath",
            age: 25
        },
    ])
    return (
        <div>
            <h1> data shows </h1>

            {data.map((da, i) => (
                <div>
                    <h1> {i = i + 1} {da} </h1>
                </div>
            ))}


            {details.map((d) => (
            <div>

                <h1>name:{d.name}</h1>
                <h2>age:{d.age}</h2>
                <hr></hr>
            </div>
            ))}
        </div>
    )
}
export default Product