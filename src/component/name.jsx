import React, { useState } from "react";

function Name(){

    const [name,setname] = useState("zoro");

    // const handlechange = ()=>{
    //     setname("vinod")
    // }
    const handlechange = () => {

        if(name == "zoro"){
     setname("luffy")       
        }else{
setname("zoro")
        }
    }

    return(

    
        <div>
            <h1> {name} </h1>

            <button onClick={handlechange}> change </button>

        </div>
    )
}
export default Name