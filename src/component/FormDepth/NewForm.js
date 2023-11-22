import React, { useState } from "react";

function NewForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        Email: "",
    });

    const handleChange = (event) => {
        // event.preventDefault();
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        // console.log(formData)
    };

    const handleSubmit = (e) => {
        
        const txt = window.confirm("Are you sure you want to submit the form ");
        if(txt === true){
            alert(
                `The user ${formData.username} has been created account sucessfully & pass word is ${formData.password}`
            );
        }
        else{
            e.preventDefault();
            console.log(formData)
        }
        console.log(formData)

        setFormData("")
    };

    return (
        <div className="d-grid bg-primary  p-5 border rounded ml-4 w-50">
            <form  onSubmit={handleSubmit}>
                <label className="m-1 d-block p-2">
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <label className="m-1 d-block p-2" >
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="" className="d-block m-1 p-3"> Email
                    <input 
                    type="text" 
                    name ="Email"
                    value={formData.Email}
                    onChange={handleChange}
                     />
                </label>
                <input 
                className="bg-success m-5 d-block"
                type="submit" 
                value="Submit" 

                />
            </form>
        </div>
    );
}

export default NewForm;
