// import React, { useState } from 'react'
// import axios from 'axios'

// const HTTPRequestAxios = () => {

//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.log(err))
//   }

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>

//       <ul>
//         {users.map((item) => {
//           return (
//             <li key={item.id}>
//               ID: {item.id} <br />
//               First Name: {item.name} <br />
//               Email: {item.email} <br />
//             </li>
//           )
//         })}
//       </ul>

//     </div>
//   )
// }

// export default HTTPRequestAxios







// fetch data of id 3


// import React, { useState } from 'react'
// import axios from 'axios'

// const HTTPRequestAxios = () => {

//   const [users, setUsers] = useState(null)

//   const fetchData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users/3")
//       .then(res => setUsers(res.data))
//       .catch(err => console.log(err))
//   }

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Single Data</button>

//       {users && (
//         <ul>
//           <li key={users.id}>
//             ID: {users.id} <br />
//             First Name: {users.name} <br />
//             Email: {users.email} <br />
//           </li>
//         </ul>
//       )}

//     </div>
//   )
// }

// export default HTTPRequestAxios









import React, { useState } from 'react'
import axios from 'axios'

const HTTPRequestAxios = () => {

  const [users, setUsers] = useState([])
  const [resMessage,setresMessage] = useState("");
  const [errorMessage,seterrorMessage] = useState("")

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const postData = () => {
    const newData = {
        name: "Aman",
        username: "Aman64",
        email : "aman2345@gmail.com"
    }

    axios.post("https://jsonplaceholder.typicode.com/users",newData)
    .then(res=>{
        console.log(res.data)
        setresMessage("User created Successfully")
        seterrorMessage("")
    })
    .catch((err) => {
        console.log(err)
        seterrorMessage("User not created Successfully")
        setresMessage("")
    })
  }



  const putData = () => {
    const newData = {
        name: "Abc",
        username: "Abc64",
        email : "abc2345@gmail.com"
    }

    axios.put("https://jsonplaceholder.typicode.com/users/5",newData)
    .then(res=>{
        console.log(res.data)
        setresMessage("User updated Successfully")
        seterrorMessage("")
    })
    .catch((err) => {
        console.log(err)
        seterrorMessage("User not updated Successfully")
        setresMessage("")
    })
  }

    const deleteData = () => {

    axios.delete("https://jsonplaceholder.typicode.com/users/5")
    .then(res=>{
        console.log(res.data)
        setresMessage("User deleted Successfully")
        seterrorMessage("")
    })
    .catch((err) => {
        console.log(err)
        seterrorMessage("User not deleted Successfully")
        setresMessage("")
    })
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={putData}>Put Data</button>
      <button onClick={deleteData}>Delete Data</button>
      <p className='text-green-600'>{resMessage}</p>
      <p className='text-red-500'>{errorMessage}</p>

      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              ID: {item.id} <br />
              First Name: {item.name} <br />
              Email: {item.email} <br />
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default HTTPRequestAxios
