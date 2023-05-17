import { useFetch } from "../hooks/useFetch"
import './styles/SingleRecipe.css'

const SingleRecipe = (props) => {

  const setChosenRecipeId = props.setChosenRecipeId

  // let recipeId = props.recipeId
  // let recipeId = 782585

  // const ingredientsUrlBuilder = () => {
  //   const baseUrl = 'https://api.spoonacular.com/recipes/'
  //   const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'
  //   return `${baseUrl}${recipeId}/information?apiKey=${apiKey}`
  // }

  // const instructionsUrlBuilder = () => {
  //   const baseUrl = 'https://api.spoonacular.com/recipes/'
  //   const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'
  //   return `${baseUrl}${recipeId}/analyzedInstructions?apiKey=${apiKey}`
  // }

  // let ingredientsURL = ingredientsUrlBuilder()
  // const recipe = useFetch(ingredientsURL)
  // let ingredients = recipe
  // console.log(recipe)

  // let instructionsURL = instructionsUrlBuilder()
  // const { data: instructionsArray } = useFetch(instructionsURL)
  // let instructions = instructionsArray[0].steps
  // console.log(instructions)

  return (
    <div className="SingleRecipe modal-backdrop">
      <div className="modal">


        <h2>Here is how to make it INGREDIENTS:</h2>
        <p>summary: leírás</p>
        <p>winePairing.pairingText milyen bor</p>
        <p><span>servings: </span>2</p>
        <p><span>readyInMinutes: </span>45 mins</p>
        <p><span>sourceName: </span>Full Belly Sisters</p>
        <p>"extendedIngredients": array sok objecttel
        extendedIngredients.measures.metric.amount
        extendedIngredients.measures.metric.unitShort
        extendedIngredients.measures.name
        </p>

        <h2>Instructions:</h2>
        <button onClick={()=>(setChosenRecipeId())}>Close</button>

      </div>

    </div>
  )
}

export default SingleRecipe