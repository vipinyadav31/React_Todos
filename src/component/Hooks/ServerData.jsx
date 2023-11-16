// use effect and userRef hooks

import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ServerData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const count = useRef(0);
    useEffect(() => {
        // const information = async () => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((res) => setData(res));
            setLoading(false);

            count.current = count.current + 1;
        }, 500);
        // };
    }, []);

    if (loading) {
        return (
            <h3 className="d-flex justify-content-center align-item-center">
                Loading.....
            </h3>
        );
    }

    const geted = data.map((even, index) => {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div
                        className="d-flex  w-50  mt-1 justify-content-center bg-success list-unstyled p-3 border   "
                        key={index}
                    >
                        <li>{even.title}</li>
                    </div>
                </div>
            </>
        );
    });
    return (
        <div>
        <div>
         <h3 className="d-flex justify-content-center bg-warning mt-2">The site get loaded {count.current} times</h3>
         
         </div>


            <ul>{geted.slice(1,15)}</ul>
        </div>
    );
};

export default ServerData;
