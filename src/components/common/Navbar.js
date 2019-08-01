import React from 'react'
import ReactDOM from 'react-dom'
import {Link, withRouter } from 'react-router-dom'



class Navbar extends React.Component {
  constructor(){
    super()
    this.state = { cocktails: {} }
  }

  render(){
    return(
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to= "/" className="navbar-item"> Home </Link>

            <Link to= "/rum" className="navbar-item"> Rum</Link>
            <Link to= "/vodka" className="navbar-item"> Vodka</Link>
            <Link to= "/gin" className="navbar-item" > Gin</Link>
          </div>
        </div>
      </nav>
    )
  }



}


export default withRouter(Navbar)
