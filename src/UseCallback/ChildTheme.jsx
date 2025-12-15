

import React from 'react'

const ChildTheme = (props) => {
    console.log("Child rendered")
  return (
    <div>
      <button onClick={props.countfunc}>Change Count</button>
    </div>
  )
}

export default React.memo(ChildTheme)
