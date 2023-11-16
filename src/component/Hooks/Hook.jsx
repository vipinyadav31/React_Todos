import { useState ,useMemo } from "react";
import React   from 'react'
// const bootstrap = require('bootstrap')


const Hook = () => {
  const [ data , setData] = useState(1);
  // const [mul , setMul] = useState(1);
       const  mul = useMemo(() => {

         return data*2
         }
      , [data])
      
	  const sub = useMemo(() =>{
		return  data-3;
	  },[data])
  
  return (
    <div>
      <h1>Added value is  {data}</h1>
      <h2 >Multification is  {mul}</h2>
      <h2 > Subtraction by 1 is   {sub}</h2>
      <button className="btn btn-primary" onClick={ () => setData(data+2 )}>click me to add & multiply 2  </button>
      {/* <h1 className='text-center'></h1> */}
    </div>
  )
}

export default Hook;
