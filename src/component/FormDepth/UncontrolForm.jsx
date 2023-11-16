import React, { useRef } from 'react'

const UncontrolForm = () => {
    const refObject = useRef();

    const handleSubmit  = (event) => {
     event.preventDefault()
    console.log(refObject.current.value);
    } 
  return (
    <div>
    <h3>Uncontrolled component</h3>
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="" >
        <input type="text"  ref = {refObject} />
    </label>
    </form>
    </div>
  )
}

export default UncontrolForm;
