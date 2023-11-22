// use effect and userRef hooks

// import { Dropdown } from "bootstrap";
import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
// import { useEffect } from "3";

const ServerData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [filterData , setfilterData] = useState([]);
    const count = useRef(0);
    useEffect(() => {
        // const information = async () => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((res) => setData(res));
            setLoading(false);

            count.current = count.current + 1;
        }, 1000);
        // };
    }, []);

    if (loading) {
        return (
            <h3 className="d-flex justify-content-center align-item-center">
                Loading.....
            </h3>
        );
    }
    const renderedUser = () => {

       return  data.map((eve, ind) => {
            return (
                <tr key={ind}>
                    <td>{eve.id}</td>
                    <td>{eve.title}</td>
                    <td>{eve.body}</td>
                </tr>
            );
        });
    };

     const sortedById = (e) =>{
    
        console.log(e.target.value);
   
     }
    console.log(data);
    return (
        <div className="bg-light">
            <div>
                <h3 className="d-flex justify-content-center bg-secondary mt-2 p-2">
                    The site get loaded {count.current} times
                </h3>
            </div>

            {/* dropdown part */}
            {/* <div className="option">
                <select
                    className="w-25 d-flex justify-content-center m-3 p-2 boarded rounded-4 "
                    onChange={SelectHandler}
                >
                    <option className="p-4" value={data.id} >Id </option>
                    <option
                        value="none"
                        defaultValue
                        label="select items"
                    ></option>
                    <option value="title">Title</option>
                    <option value="description"> Description</option>
                </select>
            </div> */}
            <div className="d-flex justify-content-center">
                <table className="  w-75 table table-striped bg-secondary  table-bordered text-center table-hover shadow-lg p-3 mb-5 bg-white rounded">
                    <thead>
                        <tr className="text-center">
                            <th > S no .</th>
                            <th onClick={sortedById}> Tittle</th>
                            <th> Description</th>
                        </tr>
                    </thead>
                    <tbody className=" table table-striped ">
                        {renderedUser}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServerData;
