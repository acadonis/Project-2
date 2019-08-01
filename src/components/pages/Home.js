import React from 'react'
import Card from '../cocktails/Card'
import axios from 'axios'
import _ from 'lodash'

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
    // const re = new RegExp(this.state.searchTerm, 'i')
    //
    // const sortedCocktails = _.filter(this.state.alcoholicCocktails, alcoholicCocktail => {
    //   return re.test(alcoholicCocktail.strDrink)
    // })
    //
    // console.log(sortedCocktails, 'handleClick sorting')
    // this.setState({ sortedCocktails })
  }



  render(){
    if(!this.state.randomCocktail) return <h2>Loading...</h2>
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">CocktailBored</h1>
          <h2 className="subtitle is-3"> 🍷 🍹 🍸A place for bored cocktail lovers</h2>

          <div className="field">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="search" className="input" onChange={this.handleChange}/>
            </form>
          </div>

          <div className= "columns is-multiline is-centered">
            <div className="column is-one-third-desktop is-one-third-tablet is-one-third-mobile">
              <h1 className="subtitle is-2 has-text-weight-light">Cocktail of the Day!</h1>
              <Card
                name={this.state.randomCocktail.strDrink}
                image={this.state.randomCocktail.strDrinkThumb}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
