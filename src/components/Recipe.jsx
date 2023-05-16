// single recepie display
// receive options
// assemble the right url for the fetch
// fetch and give the data to map function to display a few of them.

import './styles/Recipe.css'

import { useFetch } from '../hooks/useFetch'

const Recipe = (props) => {

  const options = props.options
  const urlBuilder = () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'

    return `${baseUrl}?apiKey=${apiKey}&cuisine=${options.cuisine}&diet=${options.diet}&type=${options.type}&number=${options.nr}`
  }

  let url = urlBuilder()
  const { data: recipes } = useFetch(url)


  // Tidy up the values from options state (change their URL related special characters) to display them in the DOM 
  const neatCuisine = options.cuisine.replace(/%20/g, " ")
  const neatType = options.type.replace(/%20/g, " ")
  let pattern = /[A-Z]/
  let neatDiet = ''
  if(options.diet !== null){
    for(let i=0; i<options.diet.length; i++){
      pattern.test(options.diet[i]) ? 
        neatDiet = neatDiet + " " + options.diet[i] : 
        neatDiet = neatDiet + options.diet[i]
    }
  }
  
  return (
    <div className="recipes">
      <h3>You have asked for some {neatCuisine} {neatDiet.toLowerCase()} {neatType} recipes.</h3>
      {recipes && recipes.totalResults ?
      <h2>Good news! We have some, here you go:</h2> :
      <h2>Bad news, we do not have the recipe you are looking for.</h2>}
      <div className="hits">
        {recipes && recipes.results.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <img className="picture" src={recipe.image} alt={recipe.title} />
            <h3 className="title">{recipe.title}</h3>
          </div> 
        ))
        }
      </div>
    </div>
  )
}

export default Recipe;

/*

{recipes.totalResults ? <h2>Good news! We have some, here you go:</h2> : <h2>Bad</h2>}
*/