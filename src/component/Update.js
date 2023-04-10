import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {

    const{id}=useParams();

    const[inputData, setinputData]=useState ({id:id, name:'',email:'',address:'',phone:''})
    const navigat=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3004/userList/'+id)
        .then(res=>setinputData(res.data))
        .catch(err=> console.log(err))
    },[])

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:3004/userList/'+ id, inputData)
        .then(res=>{
            alert('Data Update Successfully')
            navigat('/')
        })
    }
  return (
    <div className='container mt-5'>

    <form className='formLCls' onSubmit={handleSubmit}>

    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Id</label>
        <input type="number" disabled  className="form-control" id="exampleInputEmail1" name="id" placeholder="Enter Name" value={inputData.id}/>
       
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" name="name" placeholder="Enter Name" value={inputData.name} onChange={e=>setinputData({...inputData, name: e.target.value})}/>
       
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" value={inputData.email} onChange={e=>setinputData({...inputData, email: e.target.value})}/>
       
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" name="address" placeholder="Enter email" value={inputData.address} onChange={e=>setinputData({...inputData, address: e.target.value})}/>
       
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone</label>
        <input type="number" className="form-control" id="exampleInputEmail1" name="phone" placeholder="Enter email" value={inputData.phone} onChange={e=>setinputData({...inputData, phone: e.target.value})}/>
       
      </div>
     
    
      <button type="submit" className="btn btn-primary mt-3 ">update </button>
    </form> 
        </div> 
  )
}
 