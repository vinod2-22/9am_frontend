// Component


// in react there are mainly three types 
// 1.useState
// 2.lifecycle
// 3.props

import React, { useState } from "react";
import Count from "./component/count";
import Name from "./component/name";
import Navbar from "./component/navbar";
import Product from "./component/product";
import Apicall from "./component/Apicall";
import "./App.css"
import Apicalltwo from "./component/Apicalltwo";
import Formone from "./component/Formone";
import Formtwo from "./component/Formtwo";
import CompA from "./component/CompA";
import { CounterProvider } from "./component/context/CounterProvider";
import GroceryList from "./component/GroceryList";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  // const[hide, sethide] = useState(true);
  // const handlelogout = () =>{
  //   sethide(false);
  // };

  // const[count, setcount] = useState(0)
  // const handleadd = (data) =>{

  //   console.log(data);
    
  //   setcount(count + 1)
  

  return(
    <div>

      
  {/* <CounterProvider> */}
 
{/* 
<CounterProvider>
  
</CounterProvider> */}
      {/* <h1>vinodhere</h1>
      <h2>bharath</h2> */}


{/* <Navbar/> */}
      {/* <Name/> */}

{/* <Product/>
 */}

{/* <Apicall/> */}

{/* {hide ? <Apicalltwo/> : "logout please login" } */}


{/* <button onClick={handlelogout}>logout</button> */}
{/* <Formone/> */}
   {/* <Formtwo/> */}
   
   {/* <CompA /> */}
   
   <GroceryList/>
  
     
  {/* </CounterProvider> */}
    </div>
  )
}


export default App