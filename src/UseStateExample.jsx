// // In class component we use with object but in case of function component we can use it with anything  

// import React, {useState} from 'react'

// const UseStateExample = () => {

//     const[count,setCount] = useState(0);

//     const incre = () => {
//         setCount((preVal) => {
//             return (preVal+1);
//         });               // setCount is callback function
//     }

//     const decre = () => {
//         setCount(preVal => preVal-1);
//     }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(preVal => preVal+1)}>Increment</button>
//       {/* <button onClick={() => incre()}>Increment</button> */}
//       <button onClick={decre}>Decrement</button>
//     </div>
//   )
// }

// export default UseStateExample





// import React, {useState} from 'react'

// const UseStateExample = () => {

//     const [Led,setLed] = useState({
//         brand:"Samsung",
//         color:"Black",
//         price:"25k"
//     });

//     const changeColor = () => {
//         setLed((preState) => {
//             return ({...preState,color:"silver"})    // preState will keep the other two values unchanged
//         });
//     }
//   return (
//     <div>
//       <h2>My led is of brand {Led.brand} and color is {Led.color} . The price is {Led.price}</h2>
//       <button onClick={changeColor}>Change</button>
//     </div>
//   )
// }

// export default UseStateExample





import React, {useState} from 'react'

const UseStateExample = () => {

    const[Arr,setArr] = useState([1,2,3,4]);

    const addElement = () => {
        // setArr(preState => [...preState, 5,6]);
        setArr((preState) =>{
            return([...preState,30])
        })
        }

  return (
    <div>
        
      <h3>Array elements are : {Arr.join(', ')}</h3>
      <button onClick={addElement}>Add Element</button>
    </div>
  )
}

export default UseStateExample










// // usf -> creates template for useState

