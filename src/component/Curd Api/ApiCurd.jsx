import axios from "axios";
import "./index.css"
import React, { useEffect, useState } from "react";

const PostApi = () => {
    const [fname, setFname] = useState("");
    const [emails, setEmails] = useState("");
    const [apiData, setApiData] = useState([]);
    const [geted, setGeted] = useState("");
    const [id, setId] = useState("");
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

    const submitHandler = async (e) => {
        if (emails === "" || fname === "") {
            e.preventDefault();
            alert("please fill the entry properly");
        } else {
            e.preventDefault();
            const respose = await axios.post(
                "https://65682d079927836bd9742fb2.mockapi.io/usersData",
                {
                    name: fname,
                    email: emails,
                }
            );
            console.log(respose);
            setFname("");
            setEmails("");
            setGeted(respose);
        }
    };

    const deleteHandler = async (ids, username) => {
        // const deletedIds =  apiData.filter((item) => {
        // return item.id !== ids;
        const res = window.confirm(
            `Are you sure you want to delete ${username} ?   `
        );
        if (res) {
            const response = await axios.delete(
                `https://65682d079927836bd9742fb2.mockapi.io/usersData/${ids}`
            );
            setGeted(response);
        }
    };

    const editHandler = async (item) => {
        setFname(item.name);
        setEmails(item.email);
        setId(item.id);

        // const response = await axios.put(
        //     `https://65682d079927836bd9742fb2.mockapi.io/usersData/${item.id}`
        // );
        // setGeted(response);
    };
      
    const handleUpdate = async (e) =>  {
        console.log("from update se",id)
        // 
        e.preventDefault();
         console.log(fname);
         console.log(emails);
           
            const respose = await axios.put(
                `https://65682d079927836bd9742fb2.mockapi.io/usersData/${id}`,
                {
                    name: fname,
                    email: emails,
                }
            );
            console.log(respose);
            setFname("");
            setEmails("");
            setGeted(respose);

    }
      
      
    // main functions starts here
    return (
        <div>
            <div className="bg-info p-3 ">
                <h4 className="d-flex justify-content-center">
                    Registration form{" "}
                </h4>
                <form
                    action=""
                    onSubmit={submitHandler}
                    className="d-flex justify-content-center m-5 bg-info"
                >
                    <label htmlFor="fname">First name</label>
                    <input
                        type="text"
                        id="fname "
                        // name="fname"
                        value={fname}
                        className=""
                        onChange={(e) => setFname(e.target.value)}
                        required
                    />
                    <label htmlFor="lname">Email</label>
                    <input
                        type="email"
                        name="lname"
                        id="lname"
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success mr-4">
                        Submit
                    </button>
                    <button type="button" className="btn btn-dark   " onClick={handleUpdate}
                    //  state which is not false by default and get true on clicking setboole(true);
                    >
                        {" "}
                        update
                    </button>
                </form>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <table className="table w-75 table-striped table-dark  table-bordered text-center   table-hover  ">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Name </th>
                            <th>  Email</th>
                            <th> Action</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {apiData.map((item, index) => {
                            return (
                                <>
                                    <tr className="" key={item}>
                                        <td>{item.id}</td>
                                        <td>{item.name} </td>
                                        <td>{item.email} </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    editHandler(item)
                                                }
                                                className=" btn btn-info m-2 "
                                            >
                                                <i class="bi bi-pencil-square"></i>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteHandler(
                                                        item.id,
                                                        item.name
                                                    )
                                                }
                                                className=" btn btn-danger  "
                                            >
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </div>
  {/* we have to pass the clicked data and booleean value which is false by default and get true on clicking th 
  edit icon like
    <Editcomponent 
      booleon = {true}
       record  = {perticuler ids, and data} */}
        </div>
    );
};

export default PostApi;
