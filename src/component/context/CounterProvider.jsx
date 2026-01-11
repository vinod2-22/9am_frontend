import React, { useContext, useState } from "react";
import { CounterContext } from "./Countercontext";

export const CounterProvider = (children) =>{

    const[count, setcount] = useState(2)

    const handleadd = () =>{
        setcount(count + 1)
    }

    return(

        <CounterContext.Provider value={{count,handleadd}}>

(children)
        </CounterContext.Provider>

    )
}