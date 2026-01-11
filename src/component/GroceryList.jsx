import React, { useEffect, useState } from "react";

import axios from "axios";

export default function GroceryList() {

    const [item, setitem] = useState("")

    const [list, setlist] = useState([])

    const handledata = (e) => {
        setitem(e.target.value);
    };


    useEffect(() => {
        handleget();
    }, [])
    const handleget = async () => {
        let apires = await axios.get("http://localhost:3000/todoList")
        // console.log(apires.data);
        setlist(apires.data)

    }
    const handleadd = async () => {

        let body = {
            list: item
        }
        let apires = await axios.post("http://localhost:3000/todoList", body)
        handleget()
    }

    const handledelete = async (id) => {
        let apires = await axios.delete("http://localhost:3000/todoList/" + id)

        handleget()
    }

        const handleedit = async  (data) =>{
        
            let editdata = prompt ("enter your edit data ",data.list)
   let body = {
    id:data.id,
    list:editdata
   }
    let apires = await axios.put("http://localhost:3000/todoList/" +data.id, body)
    handleget()
        }

        <h1>vinodhere</h1>
    
    return (

        <div>

            <h1>Grocery List</h1>
            <input onChange={handledata} placeholder="enter your items" />
            <button onClick={handleadd} type="button" class="btn btn-primary ms-3">
                Add {""}</button>


            {list.map((da, i) => (
                <div key={i}>
                    <h4> {i + 1}. {da.list}</h4>

                    <button onClick={() => handleedit(da)} type="button" class="btn btn-secondary ms-3">
                        edit{""}</button>


                    <button onClick={() => handledelete(da.id)} type="button" class="btn btn-danger ms-3">
                        delete {""}</button>


                </div>

            ))}

        </div>
    )
}