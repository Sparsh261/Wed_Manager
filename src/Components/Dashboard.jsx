import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';

import './Dashboard.css'


export default function Dashboard({wedData}){

    // console.log(typeof(wedData[0]));
    
    // const [dashDetails, setdashDetails] = useState({ 
    //                                                     Guests:0, 
    //                                                     Days_to_Go : 0, 
    //                                                     Budget : 0, 
    //                                                     Guests_invited : 0 
    //                                                 })


    const [dashDetails, setdashDetails] = useState([]);
    
    
    useEffect(()=>{
        setdashDetails([...dashDetails, wedData])
        // console.log(obj["Name"])
        
    }, [wedData])
    
    
    return(
        <>
            <div className="dashboard container">
                <h1>Dashboard</h1>
                <div className="container content">
                    <div className="content-header">
                        <h3>Wedding Details</h3>
                        {/* <Link to="/WeddingDetails"></Link> */}
                        <button className="btn btn-primary">Edit Wedding Details</button>
                    </div>
                    <div className="content-cards">
                        <div className="box">
                            <p>Guests</p>
                            {/* <p>{dashDetails[1].Guests == 'Ram'}</p> */}
                        </div>
                        <div className="box">
                            <p>Days to Go</p>
                            <p></p>
                        </div>
                        <div className="box">
                            <p>Budget</p>
                            <p></p>
                        </div>
                        <div className="box">
                            <p>Guests invited</p>
                            <p></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}