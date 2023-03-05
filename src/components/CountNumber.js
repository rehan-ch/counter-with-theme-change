import React from 'react'
import '../styles/count.css';

function CountNumber(props) {
  return (
    <div>
        <h1 className='display-number'>{props.count}</h1>
    </div>
  )
}

export default CountNumber