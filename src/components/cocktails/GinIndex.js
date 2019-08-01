import React from 'react'
import axios from 'axios'
import Card from './Card'
import _ from 'lodash'
import {Link } from 'react-router-dom'

class GinIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: [],
      searchTerm: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e){
    this.setState({ searchTerm: e.target.value})

  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
      .then(res => this.setState({ cocktails: res.data.drinks }))
  }

  filterCocktails(){
    const re = new RegExp(this.state.searchTerm, 'i')

    const filterCocktails = _.filter(this.state.cocktails, cocktail => {
      return re.test(cocktail.strDrink)
    })

    return filterCocktails
  }


  render(){
    console.log(this.state)
    if(!this.state.cocktails) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="field">
            <input placeholder="Search your favourite drink" className="input" onKeyUp={this.handleKeyUp}/>
          </div>
          <div className="columns is-multiline">
            {this.filterCocktails().map(cocktail =>
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


export default GinIndex
