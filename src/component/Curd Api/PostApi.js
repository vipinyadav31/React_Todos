import axios from "axios";
import React, { useEffect, useState } from "react";

const PostApi = () => {
    const [fname, setFname] = useState("");
    const [emails, setEmails] = useState("");
    const [apiData, setApiData] = useState([]);
    const [geted, setGeted] = useState("");
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
    console.log(apiData);

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
            setGeted(respose);
            console.log(respose);
            setEmails("");
            setFname("");
        }
    };

    const deleteHandler = async (ids , username) => {
        // const deletedIds =  apiData.filter((item) => {
        // return item.id !== ids;
        const res = window.confirm(`Are you sure you want to delete ${username} ?   `);
        if (res) {
            const response = await axios.delete(
                `https://65682d079927836bd9742fb2.mockapi.io/usersData/${ids}`
            );
            setGeted(response);
        }

        // setApiData(deletedIds) ;
    };

    return (
        <div>
          <div className="bg-info p-3 ">
            <h4 className="d-flex justify-content-center">Registration form </h4>
            <form action="" onSubmit={submitHandler} className="d-flex justify-content-center m-5 bg-info"  >
                <label htmlFor="fname">First name</label>
                <input
                    type="text"
                    id="fname "
                    // name="fname"
                    // value={fname}
                    className=""
                    onChange={(e) => setFname(e.target.value)}
                />
                <label htmlFor="lname">Email</label>
                <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={emails}
                    onChange={(e) =>setEmails( e.target.value)}
                />
                <button type="submit" className="btn btn-success ">
                    Submit
                </button>
            </form>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <table className="table w-75 table-striped table-dark  table-bordered text-center   table-hover  ">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th>user Name </th>
                            <th> user Email</th>
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
                                                href="#"
                                                target="#"
                                                onClick={() =>
                                                    deleteHandler(item.id , item.name)
                                                }
                                                className=" btn btn-danger "
                                            ><i class="bi bi-trash3"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })} 
                    </tbody>
                </table>
            </div>
            <div>
    </div>
        </div>
    );
};

export default PostApi;
