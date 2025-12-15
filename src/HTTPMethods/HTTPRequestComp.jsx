// import React, { useState,useEffect } from 'react'

// const HTTPRequestComp = () => {
//     const [posts,setposts] = useState([])

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())  // converting json string from the link to json
//         .then(data => {
//         console.log(data)
//         setposts(data)
//     })
//     },[])

//     // useEffect is used here since everytime the setposts is get called, the object is being created(re-rendering) happens
//     // therefore we use useEffect with dependency array to run it one tome only
    

//   return (
//     <div>
//       <ul>
//         {
//             posts.map((item)=>{
//                 return(
//                     <li key={item.id}>                          
//                         ID: {item.id}<br/>
//                         Title: {item.title}<br/>
//                         User id: {item.userId}
//                     </li>
//                 )
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default HTTPRequestComp

// // key is builtin prop










// import React, { useState, useEffect } from 'react'

// const HTTPRequestComp = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.users);
//         setPosts(data.users);   
//       });
//   }, []);

//   const fetchData = () => {
//     console.log(posts); 
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>

//       <ul>
//         {
//         posts.map((item) => (
//           <li key={item.id}>
//             First Name: {item.firstName} <br />
//             Last Name: {item.lastName} <br />
//             Age: {item.age}<br/>
//             Gender: {item.gender} <br />
//             Email: {item.email} <br />
//             Phone: {item.phone}<br/>
//           </li>
//         ))
//         }
//       </ul>
//     </div>
//   );
// }

// export default HTTPRequestComp;




// another method




import React, { useState, useEffect } from 'react'

const HTTPRequestComp = () => {
  const [posts, setPosts] = useState([]);
  const [resMessage,setresMessage] = useState('')
  const [errMessage,seterrMessage] = useState('')

  const fetchData = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setPosts(data.users);   
      });
  }


  const postData = () => {
    const newData = {
        userId: 400,
        title:"React Class"
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers : {"Content-Type":"application/json"},
        body: JSON.stringify(newData)
    })
    // .then(res => res.json())
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error(`${res.status}`)
        }

        return res.json()
    })
    .then(data =>{
        console.log(data);
        setresMessage("Post Added Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        seterrMessage("Post is not added!!! There is a failure");
        seterrMessage("");
    })
  }


  const putData = () => {
    const updateData = {
        userId: 400,
        title:"React Class"
    }

    fetch('https://jsonplaceholder.typicode.com/posts/5',{
        method:"PUT",
        headers : {"Content-Type":"application/json"},
        body: JSON.stringify(updateData)
    })
    // .then(res => res.json())
    .then(res=>{
        console.log(res.status)
        if(!res.ok){
            throw new Error(`${res.status}`)
        }

        return res.json()
    })
    .then(data =>{
        console.log(data);
        setresMessage("Post Updated Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        seterrMessage("Post is not updated!!! There is a failure");
        seterrMessage("");
    })
  }


  const deleteData = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/5',{
        method:"DELETE",
    })
    .then(res=>{                 
        console.log(res.status)
        if(!res.ok){
            throw new Error(`${res.status}`)
        }

        return res.json()
    })
    .then(data =>{
        console.log(data);
        setresMessage("Post Deleted Successfully");
        seterrMessage("");
    })
    .catch(()=>{
        seterrMessage("Post is not deleted!!! There is a failure");
        seterrMessage("");
    })
  }
   

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={putData}>Put Data</button>
      <button onClick={deleteData}>Delete Data</button>
      <p className='text-green-500'>{resMessage}</p>
      <p className='text-red-700'>{errMessage}</p>

      <ul>
        {
        posts.map((item) => (
          <li key={item.id}>
            First Name: {item.firstName} <br />
            Last Name: {item.lastName} <br />
            Age: {item.age}<br/>
            Gender: {item.gender} <br />
            Email: {item.email} <br />
            Phone: {item.phone}<br/>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default HTTPRequestComp;
