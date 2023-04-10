import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'




export default function Read() {

    const{id}=useParams()
    const  [dataRead, usedataReat]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3004/userList/'+id)
        .then(res=>usedataReat(res.data))
        .catch(err=> console.log(err))
    })
  return (
    <div className='container'>
        <h4>Read Data</h4>
        <table className='table'>
            <tbody>
                <tr>
                    <td>{dataRead.id}</td>
                    <td>{dataRead.name}</td>
                    <td>{dataRead.email}</td>
                    <td>{dataRead.address}</td>
                    <td>{dataRead.phone}</td>
                </tr>
                <tr><Link to={'/'}>Back</Link></tr>
            </tbody>
        </table>
    </div>

  )
}
