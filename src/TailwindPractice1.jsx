import React from 'react'

const TailwindPractice1 = () => {
  return (
    <body className='bg-black'>
        <div className='bg-white h-100 w-100 pt-10 rounded-xl'>
      <img src="https://img.freepik.com/free-photo/fair-haired-woman-looking-with-
      pleased-calm-expression_176420-15145.jpg?semt=ais_hybrid&w=740&q=80" 
      className='border-solid border-5 border-blue-700 rounded-full h-30 w-30 mx-auto object-cover'></img>
      <p className='pt-5 italic'>"Tailwind CSS made designing so simple! I could create responsive layouts 
        without writing a single CSS file."</p><br></br>
        <p className='font-bold text-2xl'>-Ankita Sharma</p>
        <p>Frontend Developer</p>
      </div>
    </body>
  )
}

export default TailwindPractice1
