import React from 'react'

const AddBlog = () => {
  return (
    <>
    <div className="container " style={{width:'45%'}}>
      <h1 className='text-center my-5'>Add Blog</h1>
    <form>
    <div className="mb-3">
    <label htmlFor="exampleText" className="form-label">Tite</label>
    <input type="text" className="form-control" id="exampleText" aria-describedby="emailHelp"/>
   
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Description </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">ImgUrl</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="d-grid gap-2 my-5">
  <button type="submit" className="btn btn-primary">Add Blog</button>
  </div>
</form>
</div>
    </>
  )
}

export default AddBlog
