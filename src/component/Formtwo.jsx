import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

export default function Formtwo() {
    const {handleSubmit,register,formState:{errors} } = useForm()

    const handledata = (data)=>{

            console.log(data);
            
    }
    return(

        <div>

 <form>

                <label>Name:</label>
                <input {...register("name",
                    {required: "Name is required",
                        minLength: {value: 3, message:"name must be at least 3 letters"}
                    })} placeholder="Name" />
                    <br />
                    {errors.name && <p style= {{color:"red"}}>{errors.name.message}</p>}
                <br />
                <br />
                <label>age:</label>
                <input {...register("age",{
                    required :"Age is requires",
                    min : {value:1, message:"age must be atleast 1"},
                    max : {value:60, message:"age must be below 60"}
                })} placeholder="enter" />
                <br />
                {errors.age && <p style={{color : "red"}}>{errors.age.message}</p>}
                <br />
                <button onClick={handleSubmit(handledata)} >submit</button>

   
            </form>
        </div>
    )
}

// useCallback
// useref 
// useMemo this three are usefull for interview just learn define