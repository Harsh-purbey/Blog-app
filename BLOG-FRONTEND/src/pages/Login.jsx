import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container " style={{width:'45%'}}>
      <h1 className='text-center my-5'>Login User</h1>
    <form>
   
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="d-grid gap-2 my-5">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
    </>
  )
}

export default Login
