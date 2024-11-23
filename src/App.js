import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsappIcon from './Pages/WhatsappIcon';


const App = () => {
  return (
    <div>
      <HashRouter>
        <WhatsappIcon />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/About' element={<About/>}/>
         <Route path='/Rooms' element={<Rooms/>} />
         <Route path='/Services' element={<Services/>} />
         <Route path='Contact' element={<Contact/>} />  */}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
