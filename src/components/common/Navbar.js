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
            <Link to= "/cocktails" className="navbar-item"> Cocktails</Link>
          </div>
        </div>
      </nav>
    )
  }



}


export default withRouter(Navbar)
