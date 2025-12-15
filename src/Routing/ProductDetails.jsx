import React from 'react'
import { useParams } from "react-router-dom"
import { products } from "./data"

const ProductDetails = () => {
   const { id } = useParams();
  const item = products.find(p => p.id === Number(id));

  if (!item) return <h2>Dish not found</h2>;

  return (
    <div>
      <h2>Dish Details</h2>
      <p><strong>Dish:</strong> {item.dish}</p>
      <p><strong>Price:</strong> {item.Price}</p>
    </div>
  )
}

export default ProductDetails
