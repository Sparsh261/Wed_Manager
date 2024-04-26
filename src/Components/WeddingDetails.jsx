import React, {useState} from 'react'
import './WeddingDetails.css'
import Dashboard from './Dashboard'


export default function WeddingDetail({wedDetails}) {

    const [weddingDetails, setweddingDetails] = useState({Name:" ", gender:" ", "Your Partner's First Name":" ", Budget:0, Date:0,  Location:" ", Guests:0});

    const chngValues = (e) => {
        const {name,value} = e.target;
        setweddingDetails({...weddingDetails, [name]:value})

    }
    
    function updateValues(e){
        e.preventDefault();
        wedDetails(weddingDetails)
        
    }




    return (
        <>
            <div id='container'>

                <h2>Wedding Details</h2>

                <form id='details' onSubmit={updateValues} >

                    <h4>Your Name</h4>
                    <input type="text" placeholder='Name' name="Name"  onChange={chngValues} />

                    <h4>Type</h4>
                    <select name="gender" id="gender" onChange={chngValues} >
                        <option value="Groom">Groom</option>
                        <option value="Bride">Bride</option>
                    </select>

                    <h4>Your Partner's First Name</h4>
                    <input type="text" placeholder=" Your Partner's First Name " name="Your Partner's First Name"  onChange={chngValues}  />

                    <h4>Estimated Budget</h4>
                    <input type="number" placeholder='Budget' name="Budget" onChange={chngValues} />

                    <h4>Date of Wedding</h4>
                    <input type="date" placeholder='Date' name="Date" onChange={chngValues}  />

                    <h4>Location</h4>
                    <input type="text" placeholder='Location' name="Location"  onChange={chngValues} />

                    <h4>Guests</h4>
                    <input type="number" placeholder='No. of Guests' name="Guests"  onChange={chngValues} />

                    <button className="btn btn-primary">Update</button>

                </form>

            </div>
        </>
    )
}