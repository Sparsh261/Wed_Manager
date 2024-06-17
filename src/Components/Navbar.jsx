import React from 'react'
import { Link } from 'react-router-dom'
// import './Navbar.css'



export default function Navbar() {

    return (
        <>
            {/* <div id='nav-container' > */}
                <nav className="navbar  navbar-expand-lg  bg-body-tertiary" >
                    <span className="navbar-brand font-weight-bold "><span className='h1'>WedManager</span></span>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                 
                    <div className=" navbar-collapse collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/wedding-details">Wedding List</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/guest-list" className="nav-link" >Guests</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="todo-list">Tasks</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            {/* </div> */}


        </>
    )
}