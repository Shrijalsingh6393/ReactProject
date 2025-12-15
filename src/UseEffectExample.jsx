// import React, {useState, useEffect } from 'react'
// // import { useFormState } from 'react-dom'

// const UseEffectExample = () => {

//     const[Like,setLike] = useState(0);
//     const[Value,setValue] = useState("React");

//     useEffect(() => {
//         console.log("The component is mounted", Like)
//         return () => console.log("The component is unmounted",Like)
//     },[Like]);   
    
    
//     // [] => empty array , adding empty array mounting will be done single time but without it mounting will be done 
//     // multiple time whenever button is clicked

//     const changeLike = () => {
//         setLike((pre)=>pre+1);
//     }

//     const changeValue = () => {
//         setValue(() => {return "Java"});
//     }

//   return (
//     <div>
//       <h1>Likes: {Like}</h1>
//       <h1>{Value}</h1>
//       <button onClick={changeLike}>Like</button>
//       <button onClick={changeValue}>Change</button>
//     </div>
//   )
// }

// export default UseEffectExample


// uef




// Activity


import React,{useState, useEffect} from 'react'

const UseEffectExample = () => {
    const [Password,setPassword] = useState("Abcd1234@");
    const [show, setShow] = useState(0);

    const showpass = () =>{ 
        setShow(1);
    }

    const hidepass = () =>{ 
       setShow(0);
    }
  return (
    <div>
      <h4>Password is : {show ? Password : "********"}</h4>
      <button onClick={showpass}>Show Password</button>
      <button onClick={hidepass}>Hide Password</button>
    </div>
  )
}

export default UseEffectExample
