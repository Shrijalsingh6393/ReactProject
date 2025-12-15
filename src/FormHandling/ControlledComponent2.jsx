// import React,{useState} from 'react'

// const ControlledComponent2 = () => {
//     const [firstname,setFirstname] = useState('')
//     const [lastname,setLastname] = useState('')
//     const [review,setReview] = useState('')

//     const changeFirstname = (e) => {
//         setFirstname(e.target.value)
//     }

//     const changeLastname = (e) => {
//         setLastname(e.target.value)
//     }

//     const changereview = (e) => {
//         setReview(e.target.value)
//     }

//   return (
//     <div>
//         <form>
//     First Name : <input type="text" className='border-2 border-solid border-black' 
//         value = {firstname} onChange={changeFirstname}/><br/>
//     Last Name : <input type="text" className='border-2 border-solid border-black' 
//         value = {lastname} onChange={changeLastname}/><br/>
//     Review : <textarea className='border-2 border-solid border-black' 
//         value = {review} onChange={changereview} ></textarea><br/>
//     <button>Submit</button>
//     </form>
//     </div>
//   )
// }

// export default ControlledComponent2






// using a single hook

import React,{useState} from 'react'

const ControlledComponent2 = () => {
    const [mydata,setMydata] = useState({
        fname:'',
        lname:'',
        review:'',
        state:''
    })
    
    const changeData = (e) =>{
        const {name,value} = e.target;
        setMydata((mydata) =>({...mydata,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        alert(`Welcome ${mydata.fname} ${mydata.lname} and your review is ${mydata.review}`)
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
    First Name : <input type="text" name="fname" className='border-2 border-solid border-black' 
        value = {mydata.fname} onChange={changeData}/><br/>
    Last Name : <input type="text" name="lname" className='border-2 border-solid border-black' 
        value = {mydata.lname} onChange={changeData}/><br/>
    Review : <textarea  name="review" className='border-2 border-solid border-black' 
        value = {mydata.review} onChange={changeData} ></textarea><br/>
    Choose State : <select value={mydata.state} onChange={changeData}>
        <option value="punjab">Punjab</option>
        <option vlaue="UP">UP</option>
    </select>
    <button>Submit</button>
    <h2>Firstname: {mydata.fname}</h2>
    <h2>Lastname: {mydata.lname}</h2>
    <h2>Review: {mydata.review}</h2>
    <h2>State: {mydata.state}</h2>
    </form>
    </div>
  )
}

export default ControlledComponent2
