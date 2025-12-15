import axios from 'axios';
import React, { useState } from 'react'

const Recipe = () => {

    const queryparam = new URLSearchParams();
    const id = queryparam.get(id)

    const [recipe,setRecipe] = useState()

    useEffect(() =>{
        axios.get(`https://dummyjson.com/recipes/${id}`)
        .then(res=>setRecipe(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <div>
      Recipe name: {Recipe.name}
    </div>
  )
}

export default Recipe
