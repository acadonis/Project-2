import React from 'react'
import axios from 'axios'
import Card from './Card'
import _ from 'lodash'

class CocktailsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: []
    }

  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => this.setState({ cocktails: res.data}))
  }


  render(){
    console.log(this.state)
    if(!this.state.cocktails.drinks) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="field">
            <input placeholder="search" className="input" onKeyUp={this.handleKeyUp}/>
          </div>
          <div className="columns is-multiline">
            {this.state.cocktails.drinks.map(cocktail =>
              <div className="column is-half-tablet is-one-quarter-desktop"
                key={cocktail.idDrink}>
                <Card name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}


export default CocktailsIndex
