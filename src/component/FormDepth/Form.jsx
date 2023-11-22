import React, { useState } from "react";


const Form = () => {
    const [inputs , setInputs] = useState({
        Uname : "",
        Email : "",
    });

     const changeHandler = (event) =>{
    //  event.preventDefault();
      const [name , value] = event.target;
     setInputs( (values) => ({  ...values , [name] : value}));
    
     }

    //  const handalSubmit =(event) => {
    //     event.preventDefault();
    //     setInput(event.target.value);
    //     // alert(`The User ${input} created sucessfully`)
    // }
    return (
        <div className="d-flex justify-content-center bg-danger p-5 ">
            <p className="d-flex justify-content-center">Enter details {inputs}</p>
            <form className="d-grid  mt-4" >
                <label htmlFor="fname"> Username
                <input
                    type="text"
                    id="Uname"
                    placeholder="Please Enter name"    
                    name="fname"
                    // value={name}
                    value={inputs.Uname}
                    onChange={changeHandler}

                    
                />
                </label>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Plz Enter Email"
                    onChange={changeHandler}
                    value={inputs.Email}
                />
                <button className="mt-2 w-50 bg-success  border rounded p-2">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Form;
