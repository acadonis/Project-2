# GA Project 2: CocktailBored 

### Link

[CocktailBored](https://acadonis.github.io/Project-2/#/)

### Brief

Over a two day "Reacathon", my colleague and I were tasked with building a React appliction which consumed a public API. 

The MVP requirements were that it:

* Included both classical and functional components
* Included a router with multiple pages
* Had a design lead by wireframes produced prior to development of the app
* Was deployable online

### Overview & concept of the project

The idea for CocktailBored was inspired by a shared love of cocktails, together with the age old problem of never having the right ingredients to hand for a particular receipe. 

We decided to reverse the process by starting with the available ingredients rather than the name of the cocktail, and allowing the user to search by ingredients to narrow down their available options. 

Considering the purpose of the app, we considered an attractive and sylish design to be essential, and made the decision to use Bulma to achieve this from the outset of the project. 

### Technologies used

React, axios, Insomnia, Bulma, HTML5, ES6, CSS 3, SASS, Git, Github

### Approach taken

Our first decision was to agree on pair-programming the app, given the limited two day window and need to work closely together to agree functionality and design elements.

We then reviewed the available public APIs that had information on cocktails available. After reviewing that it would fit with our ingredients led approach, we chose [TheCocktailDB](https://www.thecocktaildb.com/) due to it's large number of cocktails easily searchable by ingredients.

Our next stage involved setting up a Trello board with key tasks, followed by a UX wireframing session to work through and agree the design of the app.

We quickly realised that the best design, given the purpose of the app to allow the user to search by ingredients, was an eyecatching homepage with a single search functionality (by ingredient). 

This would then lead the user to an index page where they would either have the option to browse the results of this initial search, or refine it further, before a final show page with information on their cocktail of choice.

<img src="./readme/wireframe.jpg" width="50%" alt="CocktailBored wireframe">

With the design agreed, we moved onto the technical implementation of the project. 

Our underlying soltuion used axios to handle our requests, and the React setState method to render the DOM. Using a React component based structure, with both classical and functional components, allowed us to reuse components such as the Navbar where possible, and minimise duplication of code. 

Using react-router allowed for a clearly structured app.js, with the url paths allowing navigation by way of the unique ingredient names or drink ids drawn from the API. For example, the ingredients search routing from the main page follows the below routing:

```javascript
<HashRouter>
  <Navbar />
  <Route path="/search/:spirit" component={CocktailsIndex} />
</HashRouter>

===========================

handleSubmit(){
    this.props.history.push('/search/' + this.state.searchTerm)

===========================

componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
      .then(res => this.setState({ cocktail: res.data.drinks }))
}
```
The search and filtering function was the key functional aspect of the app, and as such the code behind this is paramount. Forming two parts, the first search on the homepage narrows down the results fetched from the API by the "strIngredient" property as above, with further filtering on the results page by name of cocktail using RegEx and the Lodash library ```javascript _.filter ``` and / or alphabetical sorting using ```javascript _.orderBy ```:

```javascript
this.state = {
      cocktails: [],
      searchTerm: '',
      sortTerm: 'name|asc',
      selectedOption: ''
    }
===========================
  filterCocktails(){
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filterCocktails = _.filter(this.state.cocktails, cocktail => {
      return re.test(cocktail.strDrink)
    })
    const sortedCocktails = _.orderBy(filterCocktails, [field], [order])

    return sortedCocktails
  }
===========================

<div className="field">
  <input placeholder="Search your favourite drink" className="input" onKeyUp={this.handleKeyUp}/>
</div>

<label> Alphabetical Order:  </label>
<select onChange={this.handleChange}>
  <option value="strDrink|asc">A-Z </option>
  <option value="strDrink|desc">Z-A </option>
</select>
```

We also decided to prepopulate a number of searches and include these on the Navbar to allow the users to access a list of cocktails by a single click. 

### Styling

As part of our planning, we decided to implement a mobile-first design approach with responsive web design. Using Bulma allowed a relatively "out of the box" approach", but none the less additional customisation was required using a multiline columns approach with the card component. 

We made a conscious decision not to clutter pages with two much information, instead preferring to limit the text on the screen and make use of large blocks of colour to give the site a spacious and relaxed feel. Given the prevalence of limited text on simple backgrounds, text and colour palette were key. 

 The font used is [font], with a colour palette of [ colors linked in ]
 
 We used Bulma variables and custom classes with SASS to tweak the underlying Bulma templates, but were conscious not to "fight" overly with the default Bulma settings:

    @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

    $family-primary: 'Oswald';
    $body-background-color: hsl(179, 3%, 90%);
    $navbar-background-color: hsl(246, 46%, 90%);
    $card-background-color: hsl(218, 17%, 21%);
    $radius-large: 6px;


    .card-content{
      color:hsl(179, 3%, 90%);
    }

    .card{
      border-radius: 10px;
    }

Overall I consider the styling to be effective, work well with the existing images being supplied by the API, and give the clean and uncluttered look we were aiming for. 

### Snippets of your code and screenshots of your project



### Wins and Blockers

#### Wins:
* An effective system for managing the alien block which maintains it's coherence and allows for all the required collision and firing mechanics. 

* The firing of multiple instances of the turret laser.

* A simple but striking design which pays homage to the original but has it's own personality. 

* A game which meets the MVP and my original requirement for a fast paced, reaction dependant experience.

#### Blockers:
* Currently only one bomb can be displayed on screen at any one time. This is despite the bomb drop code having the same underlying principles as turret firing, which can handle multiple instances of a turret laser on screen. 

* It seems probable that this is an interval issue which has crept in due to the different bomb firing mechanism (automatic firing on a per ms basis) versus a keypress for the turret.

* Keypress speed for the turret movement and firing also needs to be slowed, which has proven more challenging than anticipated.

* An early attempt to have a scalable grid, based on the width variable, was a red herring which consumed too much time when MVP had still not been met. 

* Destroying all the aliens or the turret being hit by a bomb does not fully stop the game code; this and a reset function to play again have proved challenging. 

### Future features

"Top n tail" the core game with:

* Start screen
* Reset button which is not a hard refresh
* High score table
* Game over screen

To achieve the above, a refactoring exercise on the existing code needs to be undertaken, especially pulling out nested functions and ensuring these are only being called when required. 


### Learning points (tech & soft skills)

#### Methodology
The importance of reaching MVP, and testing MVP thoroughly at that point to make sure the principles behind the code work  before proceeding to more complex elements was my principal learning point from this project. 

Having spent several days development more advanced features without reaching MVP, when I hit blockers on MVP elements this was complicated by having complex code already written in other areas. 

I also was reminded of the importance of building code one step at a time, and not trying to make large jumps before testing. If you cannot see a way of incrementally adding features in a controlled manner rather than writing everything at one, your code is probably not as optimised as it could be.

In line with this, my Trello board usage was not as disciplined as it could have been, and having a clear picture of what tasks were outstanding and their importance would have been a clear benefit, and is something I have implemented subequent to this project. 

#### Technical
The project developed my technical skills in every area of the technologies used. In Javascript, I became more comfortable with the use of arrays, functions and structuring variables to avoid scoping issues. Avoiding coding "soup" and functions become too unwieldy was also something I was mindful of, with a degree of success.

The use of SASS for the CSS styling increased my knowledge of this useful tool, and practice with flexbox in CSS meant the layout of the game was a relativey straightforward. 
