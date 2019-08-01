import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,  Route } from 'react-router-dom'

import Home from './components/pages/Home'
import ShowCocktails from './components/cocktails/Show'
import CocktailsIndex from './components/cocktails/Index'
import VodkaIndex from './components/cocktails/VodkaIndex'
import RumIndex from './components/cocktails/RumIndex'
import GinIndex from './components/cocktails/GinIndex'
import Navbar from './components/common/Navbar'
import './style.scss'


class App extends React.Component {
  constructor(){
    super()
    // this.state = { cocktails: {} }
  }

  render(){
    return(
      <div>
        <HashRouter>
          <Navbar />
          <Route path="/cocktails/:id" component={ShowCocktails} />
          <Route path="/gin" component={GinIndex} />
          <Route path="/vodka" component={VodkaIndex} />
          <Route path="/rum" component={RumIndex} />
          <Route path="/search/:spirit" component={CocktailsIndex} />
          <Route exact path="/" component={Home} />
        </HashRouter>

      </div>
    )
  }

}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
