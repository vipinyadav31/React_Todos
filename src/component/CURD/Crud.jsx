import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Crud = () => {


    useEffect(() =>{
     
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((res) =>  console.log((res.data)))
    },[])
  return (
    <div>


      
    </div>
  )
}

export default Crud
