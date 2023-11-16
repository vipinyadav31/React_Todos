import React, { useState } from "react";


const Form = () => {
    const [input , setInput] = useState({})

     const changeHandler = (event) =>{
     event.preventDefault();
     const value  = event.target.value;
     const   Uname  = event.target.name;


     setInput( (values) => ({...values , [Uname] : value}));
    
     }

     const handalSubmit =(event) => {
        event.preventDefault();
        setInput(event.target.value);
        // alert(`The User ${input} created sucessfully`)
    }
    return (
        <div className="d-flex justify-content-center bg-danger p-5 ">
            <p className="d-flex justify-content-center">Enter details {input}</p>
            <form className="d-grid  mt-4" onSubmit={handalSubmit}>
                <label htmlFor="fname"> Username
                <input
                    type="text"
                    id="fname"
                    placeholder="Please Enter name"    
                    name="fname"
                    // value={name}
                    // value={input}
                    onChange={changeHandler}

                    
                />
                </label>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Plz Enter Email"
                    onChange={changeHandler}
                />
                <button className="mt-2 w-50 bg-success  border rounded p-2">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Form;
