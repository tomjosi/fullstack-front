import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const {id}=useParams()

    const[user,setUser]=useState({

        name:"",
        userName:"",
        email:""
      });
    
      const{name,userName,email}=user

    const loadUser=async ()=>{

        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
      
      }

      useEffect(()=>{
        loadUser();
      }, [id]);




  return (
    

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center-m4">View User</h2>
            <div className='card'>
                <div className='card-header'>
                    Details of User id:{id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Name:</b>{name}
                        </li>
                        <li className='list-group-item'>
                            <b>UserName:</b>{userName}
                        </li>
                        <li className='list-group-item'>
                            <b>Email:</b>{email}
                        </li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={'/'}>Back to Home</Link>
        </div>
      </div>
    </div>


  )
}
