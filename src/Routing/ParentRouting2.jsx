import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Home1 from './Home1'

const ParentRouting2 = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1/>}></Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ParentRouting2
