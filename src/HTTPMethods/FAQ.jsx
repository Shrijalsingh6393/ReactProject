import React, { useReducer } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
  { question: "What is a component?", answer: "A component is a reusable piece of UI." },
  { question: "What is state?", answer: "State is data that changes over time." }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return state === action.index ? null : action.index; // open only one at a time
    default:
      return state;
  }
};

const FAQ = () => {
  const [openIndex, dispatch] = useReducer(reducer, null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>FAQ Section</h2>

      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={styles.question}
            onClick={() => dispatch({ type: "TOGGLE", index })}
          >
            {faq.question}
          </div>

          <div
            className={`${styles.answer} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
