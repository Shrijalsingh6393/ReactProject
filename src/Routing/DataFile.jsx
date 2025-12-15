import React from 'react'

const DataFile = () => {
    const queryparam = new URLSearchParams(window.location.search)
    const name = queryparam.get('name')
    const regno = queryparam.get('regno')
  return (
    <div>
      <p>this is Data File</p>
      <p>Name: {name}</p>
      <p>Reg no.: {regno}</p>
    </div>
  )
}

export default DataFile
