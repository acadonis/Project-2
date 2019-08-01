import React from 'react'
import axios from 'axios'
import Card from './Card'
import _ from 'lodash'
import {Link } from 'react-router-dom'

class CocktailsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: []
    }

  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.props.match.params.spirit)
      .then(res => this.setState({ cocktails: res.data.drinks }))
  }


  render(){
    console.log(this.state)
    if(!this.state.cocktails) return <h2>No result found. Return <Link to="/">home </Link> </h2>
    return(
      <section className="section">
        <div className="container">
          <div className="field">
            <input placeholder="search" className="input" onKeyUp={this.handleKeyUp}/>
          </div>
          <div className="columns is-multiline">
            {this.state.cocktails.map(cocktail =>
              <div className="column is-half-tablet is-one-quarter-desktop"
                key={cocktail.idDrink}
              >
                <Link to={`/cocktails/${cocktail.idDrink}`}>
                  <Card name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}


export default CocktailsIndex
