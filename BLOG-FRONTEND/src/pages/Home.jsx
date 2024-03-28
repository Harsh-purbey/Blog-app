import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios';
import UserDetails from '../components/UserDetails';


const Home = () => {
  const [blog , setBlog] =useState([]);

  useEffect( () => {

    axios.get('http://localhost:4000/api/blog/allblogs')
      .then((response) => {
        console.log(response.data.blogs);
        setBlog(response.data.blogs)
      })
      .catch((error) => {
        console.log(error);
      })
      
    },[])



  return (
    <div className='container text-center my-5' style={{width:'50%'}}>
      { 
          blog.map( (data) => ( 

 
              <div className="card mb-3 my-5 bg-secondary text-light" style={{maxWidth:"660px"}}>
          <div className="row g-0">
            <div className="col-md-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img src={data.imgUrl} className="img-fluid rounded-start" alt="..." style={{width:'90%'}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-text">{data.discription}</p>
                <p className="card-text"><small className="">{data.createdAt.toLocaleString()}</small></p>
                <UserDetails id={data.user}/>
              </div>
            </div>
          </div>
        </div>

           ))
        }
    </div>
  )
}

export default Home
