import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="">React Crud</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
     
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-outline-success text-white" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
  )
}
