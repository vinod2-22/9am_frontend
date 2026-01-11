import React, { useState } from "react";

export default function Formone() {

    const[name,setname] = useState("")
    const[age,setage] = useState("")

    const handlename = (e)=>{
        setname(e.target.value)
        
    };

    const handleage = (e)=>{
        setage(e.target.value)
    }

    return (

        <div>
            <form>

                <label>name:</label>
                <input onChange={handlename} placeholder="enter" />
                <br />
                <label>age:</label>
                <input onChange={handleage} placeholder="enter" />
                <br />
                <button>submit</button>

        {name} {age}
            </form>
        </div>
    )
}