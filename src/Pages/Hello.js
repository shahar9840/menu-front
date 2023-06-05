import React from 'react'
import { Link } from 'react-router-dom'
import './Hello.css'


function Hello() {
  return (
    <div >
      <div>
      <div><button className='menu-button '> <Link style={{textDecoration:'none',color:'black'}} to='/menu'>לצפייה בתפריט </Link> </button></div>
    </div></div>
  )
}

export default Hello