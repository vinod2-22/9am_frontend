import React, { useState } from "react";
import Navbar from "./Navbar";

function Count (){



    //    state is used to store the data in the component 
    // state- hook it is a inbuild function usestate()

    const [Count,setcount]= useState(1) 
    function changename(){
        setcount(Count + 1)

      
    }
    
    return(

        <>
        <h1> Count - {Count}</h1>
        <button onClick={changename}> change</button>

        </>
    )
}
export default Count 