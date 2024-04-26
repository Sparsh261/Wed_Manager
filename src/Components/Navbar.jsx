import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {

    return (
        <>

            {/* <div style={{ backgroundColor: "#FFFFFF", height: "80px", padding: "0" }}>

                <nav className="navbar navbar-expand-lg bg-body-tertiary "  >
                    <div className="container-fluid" style={{ backgroundColor: "#FFFFFF" }}>
                        <a className="navbar-brand" href="#" >WED-MANAGER</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav" style={{ marginLeft: "" }}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">To Do</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Guests</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Budget</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Wedding Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Logout</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div> */}



            <div id='nav-container' >
                <nav className= "navbar ml-lg-4 navbar-expand-md  bg-body-tertiary" >
                    {/* <div > */}
                    <span className="navbar-brand font-weight-bold "><span className='h1'>WedManager</span></span>
                    <div>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    {/* </div> */}
                    <div className="collapse navbar-collapse ml-lg-5" id="navbarNav">
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
            </div>


        </>
    )
}