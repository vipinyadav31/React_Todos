// import { Button } from "bootstrap";
import React, { useState } from "react";

const Todo = () => {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    // const [EditItems , setEditItems] = useState(0);

    const addHandler = (e) => {
        e.preventDefault();

        if (activity) {
            setListData((listData) => {
                const updatedList = [...listData, activity];
                console.log(updatedList);
                setActivity("");
                return updatedList;
            });
        }
    };
    const ChangeHandler = (e) => {
        setActivity(e.target.value);
    };

    const removeActivity = (index) => {
        const removeUpdateListData = listData.filter((ele, id) => {
            return index !== id;
        });
        setListData(removeUpdateListData);
    };
    const HandleRemoveAll = () => {
        setListData([]);
    };
    //   const updateTodo = (id, title) => setTodos(todos.map((t) => (t.id === id ? { ...t, title } : t)));
    // setMyArray(oldArray => [...oldArray, newElement]);

    const EditHandler = (ind, val) => {
        // setListData((prevTodos) =>     [...prevTodos , val]
        const arr = [...listData];
        arr.splice(ind, 1, val);
        setListData(arr);
        console.log(arr, "--------");
        // setListData(arr.splice(ind,1,val))

        // prevTodos.map((todo, index) => {
        //     if (ind === index) {

        //return  [...prevTodos , val]

        //     } else {
        //         return todo;
        //     }
        //     // return  dat ;
        // })
    };
    // main function return here
    return (
        <div className="bg-denger  bg-warning   w-50 m-auto  p-4 ">
            <h2 className="d-flex justify-content-center m-3 p-2 ">
                Todo List
            </h2>
            <form
                className="d-flex justify-content-center"
                onSubmit={addHandler}
            >
                <label htmlFor="">
                    <input
                        className=" justify-content-center  pb-2 "
                        type="text"
                        name="inputField"
                        value={activity}
                        onChange={ChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    // value=" add"
                    className=" btn bg-success"
                    // value={activity}
                    // onClick={addHandler}
                >
                    Add
                </button>
            </form>
            {listData.length !== 0 &&
                listData.map((value, index) => {
                    return (
                        <div
                            className="d-flex justify-content-center mt-2 "
                            key={index}
                        >
                            <div className="  w-50 rounded-2 p-2 m-2  list-unstyled bg-primary  overflow overflow-auto">
                                {value}
                            </div>
                            <button
                                className="btn btn-danger  m-2"
                                onClick={() => removeActivity(index)}
                            >
                                Remove
                            </button>
                            <button
                                className="btn btn-dark m-2 3"
                                onClick={() =>
                                    EditHandler(index, prompt(" todo", value))
                                }
                            >
                                Edit
                            </button>
                        </div>
                    );
                })}
            {listData.length > 1 && (
                <button
                    className="btn btn-info  m-3  "
                    onClick={HandleRemoveAll}
                >
                    Remove all
                </button>
            )}
        </div>
    );
};

export default Todo;
