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
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ cocktail: res.data.drinks }))
  }

  render(){
    console.log('rendering', this.state)
    if(!this.state.cocktail[0]) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={this.state.cocktail[0].strDrinkThumb} alt={this.state.cocktail[0].strDrink} />
              </figure>
            </div>
            <div className="column">
              <div className="title is-1">{this.state.cocktail[0].strDrink}</div>
              <div className="subtitle is-5">{this.state.cocktail[0].strAlcoholic}</div>
              <hr />
              <div className="subtitle is-4">Instructions: </div>
              <div className="subtitle is-6">{this.state.cocktail[0].strGlass}</div>
              <div className="subtitle is-6"> {this.state.cocktail[0].strInstructions}</div>
              <div className="subtitle is-4">Ingredients:  </div>
              <div className="columns is-mobile">
                <div className="column">
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient1}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient2}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient3}</div>
                </div>
                <div className="column">
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient4}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient5}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient6}</div>
                </div>
                <div className="column">
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient7}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient8}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient9}</div>
                </div>
                <div className="column">
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient10}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient11}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient12}</div>
                </div>
                <div className="column">
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient13}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient14}</div>
                  <div className="subtitle is-6">{this.state.cocktail[0].strIngredient15}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default ShowCocktails
