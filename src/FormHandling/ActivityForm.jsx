import React,{useState} from 'react'

const ActivityForm = () => {

    const[stat,setStat] = useState(" ")

    const changeData = (e) =>{
        setStat(e.target.value)
    }

  return (
    <div>
      <form>
        Choose State: <select value={stat} onChange={changeData}>
            <option>Select</option>
            <option>Uttar Pradesh</option>
            <option>Punjab</option>
            <option>MP</option>
            <option>HP</option>
        </select>
      </form><br/>
      <h2>State : {stat}</h2>
    </div>
  )
}

export default ActivityForm
