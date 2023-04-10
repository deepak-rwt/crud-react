import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const[data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3004/userList')
    .then(res=> setData(res.data)) 
    .catch(err=>console.log(err))
  },[])


const handledelet=(id)=>{
  // alert("deleted "+id);
  if(window.confirm("do you want delete?")){
    axios.delete('http://localhost:3004/userList/' + id)
    .then(res=>{
      if(res.data){
        alert("product deleted");
        let datadel=data.filter(pro=>pro.id!==id)
        setData(datadel);
      }
    })
  }
  
};
  
  return (
    <div className='container mt-4'>
        <h4>Crud App with JSON Server </h4>
        <Link className='btn btn-primary my-4' to="/createUser">Create +</Link>
        <table className='table'>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th colSpan={3}> Actions</th>
            </tr>
          </thead>
          <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.address}</td>
              <td>{d.phone}</td>
              <td><button className='btn btn-danger' onClick={e=>handledelet(d.id)}>Delete</button></td>
              <td><Link className='btn btn-success' to={`/update/${d.id}`}>Edit</Link></td>
              <td><Link className='btn btn-primary' to={`read/${d.id}`}>Read</Link></td>
             
            </tr>

          ))}
          </tbody>
        </table>
    </div>
  )
}
