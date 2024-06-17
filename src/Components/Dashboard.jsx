import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';

import './Dashboard.css'


export default function Dashboard({wedData}){
    
    const [dashDetails, setdashDetails] = useState({Guests:0, Date:0,Budget:0,Guests_invited:0});

    let temp = {};
    for(let i = 0; i < wedData.length; i++){
        console.log(wedData)
        console.log(213)
        temp = {temp,...wedData[i]}
    }
    
    useEffect(()=>{
        setdashDetails({...dashDetails,...temp});        
    }, [wedData])
    
    let d = new Date();
    let d1 = new Date(dashDetails.Date);
    
    return(
        <>
            <div className="dashboard container">
                <h1>Dashboar</h1>
                <div className="container content">
                    <div className="content-header">
                        <h3>Wedding Details</h3>
                        <Link to="/wedding-details"><button className="rounded p-1 w-100 bg-primary">Edit Wedding Details</button></Link>
                        
                    </div>
                    <div className="content-cards">
                        <div className="box">
                            <p>Guests</p>
                            <p>{dashDetails.Guests}</p>
                        </div>
                        <div className="box">
                            <p>Days to Go</p>
                             <p>{dashDetails.Date==0?0:Math.round((d1-d)/86400000)}</p> 
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