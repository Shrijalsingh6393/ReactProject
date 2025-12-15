

// import React,{useReducer} from 'react'

// const UseReducerExample1 = () => {

//     const initialCartState = {count:0}
//     const initialCartdisState = {dis:""};

//     const reducerCart = (state,action) => {
//         switch(action.type){
//             case 'addcart':
//                 return {count:state.count+1};
//                 // return {count:state.count+action.value+1};
//             case 'removecart' :
//                 return {count:state.count==0?0:state.count-1};
//             case 'resetcart' :
//                 return initialCartState;
//             default:
//                 return state;
//         }
//     }

//     const reducerdisCart = (state,action) => {
//         switch(action.type){
//             case 'applied':
//                 return 'applied';
//             case 'removed':
//                 return 'removed';
//             default:
//                 return state;
//         }
//     }

//     const [cartState,dispatchCart] = useReducer(reducerCart,initialCartState)
//     const [discountState,dispatchdisCart] = useReducer(reducerdisCart,initialCartdisState)

//   return (
//     <div>
//       <h2>Cart : {cartState.count}</h2>
//       <button onClick={() => dispatchCart({type:'addcart'})}>Add to Cart</button>
//       {/* <button onClick={() => dispatchCart({type:'addcart',value:9})}>Add to Cart</button> */}
//       <button onClick={() => dispatchCart({type:'removecart'})}>Remove from Cart</button>
//       <button onClick={() => dispatchCart({type:'resetcart'})}>Reset Cart</button>
//       <h2>Discount : {discountState}</h2>
//       <button onClick={() => dispatchdisCart({type:'applied'})}>Apply Discount</button>
//       <button onClick={() => dispatchdisCart({type:'removed'})}>Remove Discount</button>
//     </div>
//   )
// }

// export default UseReducerExample1











import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
  { question: "What is a component?", answer: "A component is a reusable piece of UI." },
  { question: "What is state?", answer: "State is data that changes over time." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Only one open at a time
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>FAQ Section</h2>

      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.question}
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>

          <div className={`${styles.answer} ${openIndex === index ? styles.open : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
