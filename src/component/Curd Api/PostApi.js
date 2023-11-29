import axios from "axios";
import React, { useState } from "react";

const PostApi = () => {
    const data = {
        fname: "",
        lname: "",
    };
    const [infoms, setInfoms] = useState(data);

     const changeHendler  = (e) => {
        setInfoms({...infoms , [e.target.name] :e.target.value })
        
     }
     const submitHandler = (e) => {
       e.preventDefault();
    
       const userData = {
        fname:  infoms.fname,
        lname : infoms.lname
      };
  

       axios.post("https://jsonplaceholder.typicode.com/users" , userData)
       .then((res) => console.log(res.status ));
       console.log(infoms);

     }

    return (
        <div>
           <form action="" onSubmit={submitHandler}>
            <label htmlFor="fname">first name</label>
            <input
                type="text"
                id="fname "
                name="fname"
                value={infoms.fname}x
                onChange={changeHendler}
            />
            <label htmlFor="lname">Last name</label>
            <input
                type="text"
                name="lname"
                id="lname"
                value = {infoms.lname}
                onChange={changeHendler}
            />
            <button type="button"  className="btn btn-success"> Submit </button>
            </form>
       </div>
    );
};

export default PostApi;
