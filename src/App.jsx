import { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar'
import WeddingDetail from './Components/WeddingDetails'
import Dashboard from './Components/Dashboard'
import GuestList from './Components/GuestList'
import ToDo from './Components/ToDo'


function App() {
  const [wedData, setwedData] = useState([])


  function wedDetails(wedDetail){
    console.log(wedDetail)
    setwedData([...wedData, wedDetail])
    console.log(wedData)
  }
  //  wedDetails = (wedDetail) =>{
  //   setwedDetails([...wedDetails, wedDetail])
  // }

  return (
    <>
        <Navbar />

        <Dashboard wedData={wedData}/>
        <WeddingDetail  wedDetails={wedDetails}/>  
         <GuestList/>
         <ToDo/>

    </>
  )
}

export default App
