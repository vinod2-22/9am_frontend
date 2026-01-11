import React, { useEffect, useState } from "react";

export default function Apicalltwo() {

    const[count, setcount]= useState(1)

    const handlea = () => {
        console.log("calling");

    }

    useEffect(() => {
        //    mounting
     handlea()

        // unmounting
        return () => {
            console.log("dead");
        };
    },[count]); 
    // ,[] dependency array 
    return (

        <div>

            <h1> useEffect </h1>
        </div>
    )
}

// life cycle
// mounting > updating > unmounting