import React, { useState } from 'react'
import axios from 'axios'

const HTTPActivity1 = () => {
    const [users, setUsers] = useState([])
  const [resMessage,setresMessage] = useState("");
  const [errorMessage,seterrorMessage] = useState("")

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
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
      <p className='text-green-600'>{resMessage}</p>
      <p className='text-red-500'>{errorMessage}</p>

      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default HTTPActivity1







// import React, { useState } from "react";
// import styles from "./FAQ.module.css";

// const faqs = [
//   { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
//   { question: "What is a component?", answer: "A component is a reusable piece of UI." },
//   { question: "What is state?", answer: "State is data that changes over time." }
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(index === openIndex ? null : index); // Only one open at a time
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>FAQ Section</h2>

//       {faqs.map((faq, index) => (
//         <div key={index} className={styles.faqItem}>
//           <div
//             className={styles.question}
//             onClick={() => toggleFAQ(index)}
//           >
//             {faq.question}
//           </div>

//           <div className={`${styles.answer} ${openIndex === index ? styles.open : ""}`}>
//             {faq.answer}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;
