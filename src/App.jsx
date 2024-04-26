import { useState } from 'react'
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import WeddingDetail from './Components/WeddingDetails'
import Dashboard from './Components/Dashboard'
import GuestList from './Components/GuestList'
import ToDo from './Components/ToDo'


function App() {
  const [wedData, setwedData] = useState([])


  function wedDetails(wedDetail){
    // console.log(wedDetail)
    setwedData([...wedData, wedDetail])
    console.log(wedData)
  }
  //  wedDetails = (wedDetail) =>{
  //   setwedDetails([...wedDetails, wedDetail])
  // }

  return (
    <>
        {/* <Dashboard wedData={wedData}/>
        <WeddingDetail  wedDetails={wedDetails}/>  
         <GuestList/>
         <ToDo/> */}

         <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact render={(props)=>( <Dashboard {...props} wedData={wedData}/>)} />
                <Route path="/wedding-details" exact render={(props)=>( <WeddingDetail {...props} wedDetails={wedDetails}/>)} />
                <Route path="/guest-list" exact render={()=>( <GuestList/>)} />
                <Route path="/todo-list" exact render={()=>( <ToDo/>)} />
                {/* <Route path="/todo-list" elemeant={<ToDo />} /> */}
            </Switch>
         </BrowserRouter>

    </>
  )
}

export default App
