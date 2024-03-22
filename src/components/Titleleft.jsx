import React from 'react'

function Titleleft(props) {
  return (
    <div className="titlePortleft">
        <h2> {props.titleleft}</h2>
        {props. children}
    </div>
  )
}

export default Titleleft