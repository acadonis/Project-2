import React from 'react'
import axios from 'axios'
import Card from './Card'


class CocktailIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: []


    }

  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(res => this.setState({ drinks: res.data}))
    console.log('mounting')
  }




  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.drinks.state.cocktails.map(cocktail =>
              <div key={cocktail.idDrink}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Card name={cocktail.strDrink} image= {cocktail.strDrinkThumb} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }



}


export default CocktailIndex
