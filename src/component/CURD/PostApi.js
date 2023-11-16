import React from 'react'

const PostApi = () => {




    return (
    <div>
       <label htmlFor ="fname">first name</label>
       <input type="text"  id = "fname "  onChange={chageHendler}/>
       <label   htmlFor = "lname">Last name</label>
       <input type="text" name="" id="lname" onChange={chageHendler} />
    </div>
  )
}

export default PostApi
