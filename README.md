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

The our next stage involved setting up a Trello board with key tasks, followed by a UX wireframing session to work through and agree the design of the app.

We quickly realised that the best design, given the purpose of the app to allow the user to search by ingredients, was an eyecatching homepage with a single search functionality (by ingredient). 

This would then lead the user to an index page where they would either have the option to browse the results of this initial search, or refine it further, before a final show page with information on their cocktail of choice.

![CocktailBored wireframe](./readme/wireframe.jpg)

With the design agreed, we moved onto the technical implementation of the project. 

Our underlying soltuion used axios to handle our requests, and the React setState method to render the DOM. Using a React component based structure, with both classical and functional components, allowed us to reuse components such as the Navbar where possible, and minimise duplication of code. 

Using react-router allowed for a clearly structured app.js, with the url paths allowing navigation by way of the unique ingredient names or drink ids drawn from the API.  

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


The overall solution to the movement mechanics of the aliens, using multiple arrays with relative positioning to the grid and applying / disapplying classes as appropriate, was arrived at after several other attempts using a single array and splicing elements from this. 

These other attempts led to a host of issues which required a rethink on the approach, and the deletion of significant amounts of code. While extremely frustrating at the time, this was a valuable lesson in not getting too attached to your code if it is not delivering the required functionality. . 

### Styling

My styling preferences lean strongly towards the simple application of strong bold, colours. With the 80s heritage of the original game, I chose to give the originally styling a twist with a neon theme and geometric imagery. The font used is [font], with a colour palette of [ colors linked in ]

### Snippets of your code and screenshots of your project

[Choose some code = turret firing mechanism]

[another bit of code]


![Space Invaders](./readme/spaceinvaders.gif)

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
