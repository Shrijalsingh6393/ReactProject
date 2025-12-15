
import {React,useContext,useState} from 'react'

const WithoutUseContext = () => {

    const [subject,setSubject] = useState("React");
  return (
    <div>
      <h2>Thus is First Component and passing the subject as prop to Component A</h2>
      <ComponentA subject={subject} />
    </div>
  )
}

const ComponentA = ({subject}) => {
    return(
        <div>
            <h2>This is Component A and receiving the prop from first Component</h2>
            <ComponentB subject={subject}/>
        </div>
    )
}

const ComponentB = ({subject}) => {
    return(
        <div>
            <h2>This is Component A and receiving the prop from Component A</h2>
            <h2>I am studying the subject : {subject}</h2>
        </div>
    )
}

export default WithoutUseContext
