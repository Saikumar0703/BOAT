import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'

import PagenotFound from './PagenotFound'
import Nav from './Nav'
import Headphones from './Headphones'
import Airpods from './Airpods'
import Neckband from './Neckband'
import Smartwatches from './Smartwatches'
import Airdops1 from './Airdops1'

import Mycard from './Mycard'
import OrderConfirm from './OrderConfirm'



export default function App() {
  return (
    
    <div>
     
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/headphones' element={<Headphones/>}/>
        <Route path='/airpods' element={<Airpods/>}/>
        <Route path='/neckband' element={<Neckband/>}/>
        <Route path='/smartwatches' element={<Smartwatches/>}/>
        <Route path='/airdops1' element={<Airdops1/>}/>
        <Route path="/PagenotFound" element={<PagenotFound/>}/>
        <Route path='/mycard' element={<Mycard/>}/>
        <Route path='/OrderConfirm' element={<OrderConfirm/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

