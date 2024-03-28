import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios';

const UserDetails = ({id}) => {

    const [user , setUser] =useState([]);

    useEffect( () => {
  
      axios.get(`http://localhost:4000/api/${id}`)
        .then((response) => {
          console.log(response.data.user);
          setUser(response.data.user)
        })
        .catch((error) => {
          console.log(error);
        })
        
      },[])


  return (
    <div>
       <h4>{user.name}</h4>
       <h4>{user.gmail}</h4>
    </div>
  )
}

export default UserDetails
