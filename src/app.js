import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import CocktailIndex  from './components/cocktails/Index'
import Navbar from './components/common/Navbar'
import 'bulma'


class App extends React.Component {
  constructor(){
    super()
    this.state = { cocktails: {} }
  }

  render(){
    return(
      <div>
        <HashRouter>
          <Navbar />
          <Route path="/cocktails" component={ CocktailIndex} />
          <Route path="/" component={Home} />
        </HashRouter>

      </div>
    )
  }


}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
