// use effect and userRef hooks
// import { Dropdown } from "bootstrap";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import "./sindex.css";
const ServerData = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("id");
    const [searchBy, setSearchBy] = useState([]);
    const [searchApiData, setSeachApiData] = useState([]);
    const count = useRef(0);
    useEffect(() => {
        setTimeout(() => {
            fatchdata();
        }, 1000);
    }, []);
    const fatchdata = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        const getting = response.data;
        setPosts(getting);
        setSeachApiData(getting);
        setLoading(false);
        count.current = count.current + 1;
    };
    if (loading) {
        return (
            // <div className="d-flex justify-content-center align-item-center">
            <div className="d-flex align-items-center justify-content-center h-100">
                <h3>Loading.....</h3>
            </div>
        );
    }

    const handleSort = () => {
        const sortedPosts = [...posts].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setPosts(sortedPosts);
    };
    const handleSortBody = () => {
        // const sortedPosts = [...posts].sort((a, b) => b.id.localeCompare(a.id));
        const sortedPosts = [...posts].sort((a, b) =>
            a.username.localeCompare(b.username)
        );

        setPosts(sortedPosts);
    };
    const handerSortAll = (svalue) => {
        console.log(svalue);

        const sortedPo = [...posts].sort((a, b) => {
            if (svalue === "id") {
                return a[svalue] - b[svalue];
            } else {
                return a[svalue].localeCompare(b[svalue]);
            }
        });

        setPosts(sortedPo);
    };

    const SelectHandler = (event) => {
        const selectedvalue = event.target.value;
        console.log(selectedvalue);
        setSortBy(selectedvalue);
        handerSortAll(selectedvalue);
    };
    // const getSeraches = (query) =>{
    //  co nst selectedval = posts.filter((items) =>{
    //      return items.title.toLowerCase().includes(query.toLowerCase())

    //     //  const deal = <items className="title"></items>
    //  })
    //  setPosts(selectedval);
    // }
    const searchHandler = (events) => {
        const SerachData = events.target.value;

        if (SerachData === "") {
            setPosts(searchApiData);
        } else {
            const val = searchApiData.filter((items) => {
                const sData =
                    (items.name
                        .toLowerCase()
                        .includes(SerachData.toLowerCase()) )||(
                    items.username.toLowerCase().includes(SerachData.toLowerCase()));

                return sData;

                //  const deal = <items className="title"></items>
            });
            setPosts(val);
        }
        setSearchBy(SerachData);
    };

    // main function return here
    return (
        <div className="bg-light">
            <div>
                <h3 className="d-flex justify-content-center bg-secondary mt-2 p-2">
                    The site get loaded {count.current} times
                </h3>
            </div>
            <button
                onClick={handleSort}
                className="btn btn-info m-2 p-2 border border-black"
            >
                sorted by Name
            </button>
            <button onClick={handleSortBody} className="btn btn-dark">
                {" "}
                sorted By User name
            </button>

            <div className="">
                <label htmlFor=" " className="d-flex justify-content-center ">
                    sort items by
                    <select
                        className="  d-flex  p-1 boarded  "
                        onChange={SelectHandler}
                        value={sortBy}
                    >
                        <option className="p-4 d-inline" value="id">
                            Id
                        </option>
                        <option value="name"> Name A-z</option>
                        <option value="username"> user name A-Z</option>
                    </select>
                </label>
            </div>
            <div>
                <p className="d-flex justify-content-center text-a">
                    <input
                        type="text"
                        placeholder="search  by name...."
                        className=" D_serarchBar container container-fluid p-2 m-3 w-75"
                        value={searchBy}
                        onChange={searchHandler}
                    />
                </p>
            </div>
            <div className="d-flex justify-content-center">
                {/* <table className="  w-75 table   table-bordered text-center  shadow-lg p-3 mb-5 bg-dark text-white rounded"> */}
                <table className="table w-75 table-striped table-dark  table-bordered    text-center  table-hover  ">
                    <thead className="">
                        <tr className="">
                            <th className=""> Id .</th>
                            <th> name</th>
                            <th> user name</th>
                            <th> email</th>
                            <th> zipcode</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {posts.map((eve, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{eve.id}</td>
                                    <td>{eve.name}</td>
                                    <td>{eve.username}</td>

                                    <td>{eve.email}</td>
                                    <td>{eve.address.zipcode}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServerData;
