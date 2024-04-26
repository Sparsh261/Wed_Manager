import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';

import './Dashboard.css'


export default function Dashboard({wedData}){

    // console.log(wedData[0]);
    // let tempWedDetails = {...wedData[0]}
    // console.log(temp);
  
    
    const [dashDetails, setdashDetails] = useState({Guests:0, Date:0,Budget:0,Guests_invited:0});

    let temp = {};
    for(let i = 0; i < wedData.length; i++){
        temp = {temp,...wedData[i]}
    }
    
    useEffect(()=>{
        setdashDetails({...dashDetails,...temp});
        // <Redirect to="/" />
        console.log(dashDetails)
        
    }, [wedData])
    
    let d = new Date();
    let d1 = new Date(dashDetails.Date);
    console.log(Date.parse(d))
    console.log(Date.parse(d1))
    
    return(
        <>
            <div className="dashboard container">
                <h1>Dashboard</h1>
                <div className="container content">
                    <div className="content-header">
                        <h3>Wedding Details</h3>
                        {/* <Link to="/WeddingDetails"></Link> */}
                        <Link to="/wedding-details"><button className="rounded p-1 w-100 bg-primary">Edit Wedding Details</button></Link>
                        
                    </div>
                    <div className="content-cards">
                        <div className="box">
                            <p>Guests</p>
                            <p>{dashDetails.Guests}</p>
                        </div>
                        <div className="box">
                            <p>Days to Go</p>
                            <p>{Math.round((Date.parse(d1)-Date.parse(d))/(1000*60*60*24))==-19839?0:Math.round((Date.parse(d1)-Date.parse(d))/(1000*60*60*24))}</p>
                        </div>
                        <div className="box">
                            <p>Budget</p>
                            <p>{dashDetails.Budget}</p>
                        </div>
                        <div className="box">
                            <p>Guests invited</p>
                            <p>{dashDetails.Guests}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}