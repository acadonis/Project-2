import React from 'react'
import axios from 'axios'
import Card from './Card'
import _ from 'lodash'
import {Link } from 'react-router-dom'

class CocktailsIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      cocktails: [],
      searchTerm: '',
      sortTerm: 'name|asc',
      selectedOption: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterCocktails = this.filterCocktails.bind(this)
  }

  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.props.match.params.spirit)
      .then(res => this.setState({ cocktails: res.data.drinks }))
  }

  handleKeyUp(e){
    this.setState({ searchTerm: e.target.value})
  }
  handleChange(e){
    this.setState({ sortTerm: e.target.value})
  }

  handleOptionChange (e){
    this.setState({ selectedOption: e.target.value })
  }

  filterCocktails(){
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filterCocktails = _.filter(this.state.cocktails, cocktail => {
      return re.test(cocktail.strDrink)
    })
    const sortedCocktails = _.orderBy(filterCocktails, [field], [order])

    return sortedCocktails
  }


  render(){
    console.log(this.state)
    if(!this.state.cocktails) return <div className="container"><h2>No result found. Return <Link to="/">home </Link> </h2> </div>
    return(
      <section className="section">
        <div className="container">
          <div className="field">
            <input placeholder="Search your favourite drink" className="input" onKeyUp={this.handleKeyUp}/>
          </div>

          <label> Alphabetical Order:  </label>
          <select onChange={this.handleChange}>
            <option value="strDrink|asc">A-Z </option>
            <option value="strDrink|desc">Z-A </option>
          </select>
          <br />
          <br />

          <div className="columns is-multiline">
            {this.filterCocktails().map(cocktail =>
              <div className="column is-half-tablet is-one-quarter-desktop"
                key={cocktail.idDrink}
              >
                <Link to={`/cocktails/${cocktail.idDrink}`}>
                  <Card name={cocktail.strDrink} image={cocktail.strDrinkThumb}/>
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
