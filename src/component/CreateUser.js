import React, { useState } from 'react'
import "../css/style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const[inputData, setinputData]=useState ({name:'',email:'',address:'',phone:''})
    const navigat=useNavigate();

    const hander=(event)=>{
        const{name,value}=event.target;
        setinputData({...inputData,[name]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3004/userList',inputData)
        .then(res=>{
            alert('Data Posted Successfully')
            navigat('/')
        })
    }
    


  return (
    <div className='container mt-5'>

<form className='formLCls' onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="name" placeholder="Enter Name" onChange={hander}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" onChange={hander}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="address" placeholder="Enter email" onChange={hander}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Phone</label>
    <input type="number" className="form-control" id="exampleInputEmail1" name="phone" placeholder="Enter email" onChange={hander}/>
   
  </div>
 

  <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
</form> 
    </div>
  )
}
