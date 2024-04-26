import React from 'react'

export default function Navbar() {


    return (
        <>

            <div style={{ backgroundColor: "#FFFFFF", height: "80px", padding: "0" }}>

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

            </div>

        </>
    )
}