import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const queryparam = new URLSearchParams(window.location.search)
    const id = queryparam.get('id')
    const[users,setusers] = useState([])

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>setusers(res.data))
      .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <p>This is contact page</p>
      <p>Name: {users.name}</p>
      <p>Username: {users.username}</p>
      <p>Email: {users.email}</p>
      <p>Phone: {users.phone}</p>
    </div>
  )
}

export default Contact
