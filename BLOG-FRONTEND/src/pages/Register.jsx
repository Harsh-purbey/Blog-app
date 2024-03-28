import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const Register = () => {
  const [user , setUser] =useState();
  const [gmail , setGmail] =useState();
  const [password , setPassword] =useState();

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(user,gmail,password);
  try{
    axios.post('http://localhost:4000/api/user/register',{name:user,gmail,password})
  }
  catch(error){
    console.error(error);
  }
 
}


  return (
    <>
    <div className="container " style={{width:'45%'}}>
      <h1 className='text-center my-5'>Register User</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="exampleText" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleText" aria-describedby="emailHelp" value={user} onChange={(e) => setUser(e.target.value)}/>
   
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={gmail} onChange={(e) => setGmail(e.target.value)}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div className="d-grid gap-2 my-5">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
    </>
  )
}

export default Register
