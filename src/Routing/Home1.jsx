import React from 'react'
import { products } from "./data"
import { useNavigate } from "react-router-dom"

const Home1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Menu</h2>

      {products.map(item => (
        <div key={item.id}>
          <p>{item.dish} - {item.Price}</p>

          <button 
            onClick={() => navigate(`/ProductDetails/${item.id}`)}
          >
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  )
}

export default Home1;

