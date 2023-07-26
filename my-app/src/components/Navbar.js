import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo_div">
        <p>{props.title}</p>
      </div>
      <div className="user_div">
        
        </div>    
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    name:PropTypes.string,
    app_logo:PropTypes.string
}