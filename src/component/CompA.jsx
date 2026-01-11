
// props -passing data from one component to another component,
// is like parent to child 
// react is a one way datatype 




// import React from "react";

// export default function CompA(props) {
//     return(
//         <div>

//         <h1> CompA - {props.name}  </h1>
//         </div>
//     )
// }


import React, { useContext } from "react";
import CompB from "./CompB";
import { CounterContext } from "./context/Countercontext";


export default function CompA() {

    const {count,handleadd} = useContext(CounterContext)
    return(
        <div>

        <h1> CompA - {count} </h1>

        <button onClick= {handleadd} >add</button>

       

        </div>
    )
}