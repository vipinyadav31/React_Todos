import React, { useState } from "react";

const PostApi = () => {
    const [fname , setFname] = useState('');
    const [emails , setEmails] = useState('');

     const submitHandler = (e) => {
       e.preventDefault();
    //    axios.post("https://jsonplaceholder.typicode.com/users" , userData)
    //    .then((res) => console.log(res.status ));
       console.log(fname , emails);

     }

    return (
        <div>
           <form action="" onSubmit={submitHandler}>
            <label htmlFor="fname">first name</label>
            <input
                type="text"
                id="fname "
                name="fname"
                value={fname}
                onChange={(e) =>  setFname(e.target.value)}
            />
            <label htmlFor="lname"> Email</label>
            <input
                type="text"
                name="email"
                id="lname"
                value = {emails}
                onChange={(e) => setEmails(e.target.value)}
            />
            <button type="submit"  className="btn btn-success"> Submit </button>
            </form>
       </div>
    );
};

export default PostApi;
