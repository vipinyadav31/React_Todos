import axios from "axios";
import React, { useEffect, useState } from "react";

const PostApi = () => {
    const [fname, setFname] = useState("");
    const [emails, setEmails] = useState("");
    const [apiData, setApiData] = useState([]);
    const [geted , setGeted] = useState('');
    // const [deleteId , setDeleteId] = useState("");

    useEffect(() => {
        fatchData();
    }, [geted]);
    const fatchData = async () => {
        try {
            const response = await axios.get(
                  "https://65682d079927836bd9742fb2.mockapi.io/usersData"
                );
            const data = response.data;
            setApiData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    // console.log(apiData);

    const submitHandler =async (e) => {

        if(emails === "" || fname === ""){
            e.preventDefault();
            alert("please fill the entry properly");
        }
        else{

            e.preventDefault();
            const respose = await axios.post("https://65682d079927836bd9742fb2.mockapi.io/usersData", {
                name: fname,
                email: emails,
            })
            setGeted(respose);
            console.log( respose)
            setEmails("");
            setFname("");
        };
        
    };



    return (
        <div>
            <form action="" onSubmit={submitHandler} className="m-5">
                <label htmlFor="fname">first name</label>
                <input
                    type="text"
                    id="fname "
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <label htmlFor="lname">Email</label>
                <input
                    type="text"
                    name="email"
                    id="lname"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                />
                {/* <input type="submit" className="btn btn-success" /> */}
                <button type="submit" className="btn btn-success" > submit</button>
                {/* <input 
                type="number" 
                value={deleteId}
                    
                /> */}
                
            </form>
             
            
            <div className="d-flex justify-content-center mt-5">
            <table className="table w-75 table-striped table-dark  table-bordered    text-center  table-hover  ">
                <thead>
                    <tr>
                        <th> Id  </th>
                        <th>user Name </th>
                        <th> user Email</th>
                    </tr>
                    
                </thead>

                <tbody>

               {apiData.map((item , index) => { 
                return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name} </td>
                        <td>{item.email} </td>
                    </tr>
                    
             
                );
            })}
                </tbody>
            </table>
            </div>

        </div>
    );
};

export default PostApi;
