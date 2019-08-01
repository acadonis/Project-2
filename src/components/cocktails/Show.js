import React from 'react'
import axios from 'axios'


class ShowCocktails extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktail: []
    }
  }

  componentDidMount(){
    console.log('mounting')
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ cocktail: res.data.drinks }))
  }

  render(){
    console.log('rendering', this.state)
    if(!this.state.cocktail[0]) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="card-image">
            <figure className="image">
              <img src={this.state.cocktail[0].strDrinkThumb} alt={this.state.cocktail[0].strDrink} />
            </figure>
            <div className="card-content">
              <h1>{this.state.cocktail[0].strDrink}</h1>
              <h2>{this.state.cocktail[0].strInstructions}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default ShowCocktails
