import React from 'react'
import Card from '../cocktails/Card'
import axios from 'axios'
import {Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => {
        this.setState({ randomCocktail: res.data.drinks[0] })
      })

    // axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    //   .then(res => {
    //     this.setState({ alcoholicCocktails: res.data.drinks })
    //   })
  }

  handleChange(e){
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit(){
    this.props.history.push('/search/' + this.state.searchTerm)

  }

  render(){
    if(!this.state.randomCocktail) return <h2>Loading...</h2>
    return (
      <div>
        <section className="hero is-medium is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">CocktailBored</h1>
              <h2 className="subtitle is-4"> 🍷 🍹 🍸A place for bored cocktail lovers</h2>
              <div className="field">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Search your favourite Ingredient" className="input" onChange={this.handleChange}/>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className= "columns is-multiline is-centered">
            <div className="column is-one-third-desktop is-one-third-tablet is-one-third-mobile">
              <h1 className="subtitle is-2 has-text-weight-light">Cocktail of the Day!</h1>
              <Link to={`/cocktails/${this.state.randomCocktail.idDrink}`}>
                <Card
                  name={this.state.randomCocktail.strDrink}
                  image={this.state.randomCocktail.strDrinkThumb}
                />
              </Link>
            </div>
          </div>
        </div>
        <section className="hero is-medium is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                About Us
              </h1>
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </h2>
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default Home
