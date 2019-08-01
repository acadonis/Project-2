import React from 'react'
import Card from '../cocktails/Card'
import axios from 'axios'
import _ from 'lodash'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      randomCocktail: [],
      alcoholicCocktails: [],
      searchTerm: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => this.setState({ randomCocktail: res.data}))

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => this.setState({ alcoholicCocktails: res.data}))

  }

  handleClick(e){
    if(event.keyCode === 13 )
      return this.setState({ searchTerm: e.target.value })
      
    e.preventDefault()
  }

  filterCocktails(){
    const re = new RegExp(this.state.alcoholicCocktails.searchTerm, 'i')

    const sortedWines = _.filter(this.state.alcoholicCocktails, alcoholicCocktail => {
      return re.test(alcoholicCocktail.strDrink)
    })
    // const sortedWines = _.orderBy(filterWines, [field], [order])
    return sortedWines
  }



  render(){
    if(!this.state.alcoholicCocktails.drinks || !this.state.randomCocktail.drinks) return <h2>Loading...</h2>
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">CocktailBored</h1>
          <h2 className="subtitle is-3"> 🍷 🍹 🍸A place for bored cocktail lovers</h2>

          <div className="field">
            <form onKeyUp={this.handleClick}>
              <input type="text" placeholder="search" className="input"/>
            </form>
          </div>
        </div>

        {this.state.randomCocktail.drinks.map(cocktail =>
          <div className="column is-half-tablet is-one-quarter-desktop"
            key={cocktail.idDrink}>
            <Card name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
          </div>
        )}
      </section>
    )
  }
}


// {this.state.alcoholicCocktails.drinks.map(alcoholicCocktail =>
//   <div key={alcoholicCocktail.idDrink}>
//     <Card name={alcoholicCocktail.strDrink} image={alcoholicCocktail.strDrinkThumb} />
export default Home
