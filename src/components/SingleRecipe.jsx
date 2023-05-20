//styles
import './styles/SingleRecipe.css'

const SingleRecipe = ({ recipe, chosenRecipeId, setChosenRecipeId }) => {

  if(recipe)
  return (
    <div className="SingleRecipe modal-backdrop">
      <div className="modal">

        <div className="header">
          <button onClick={()=>(setChosenRecipeId())}>x</button>
          <img src={recipe.image} alt={recipe.title} />
          <div className="info">
            <h3>{recipe.title}</h3>
            {recipe.glutenFree ? <span className="diet yes">gluten free</span> : <span className="diet no">not gluten free</span>}
            {recipe.dairyFree ? <span className="diet yes">dairy free</span> : <span className="diet no">not dairy free</span>}
            {recipe.vegan ? <span className="diet yes">vegan</span> : <span className="diet no">not vegan</span>}
            {recipe.vegetarian ? <span className="diet yes">vegetarian</span> : <span className="diet no">not vegetarian</span>}
            <p>Ready in about {recipe.readyInMinutes} minutes. 
            Get full recipe: <a href={recipe.sourceUrl}> {recipe.sourceName}</a></p>
          </div>
        </div>

        <div className="ingredients">
          <h3>Ingredients ({recipe.servings} servings)</h3>
          <ul>
            {recipe.extendedIngredients.map((item)=>(
              <li key={item.id}>
                <p>{item.original}</p>
              </li>
            ))}
          </ul>
        </div>

        {recipe.winePairing.pairingText && <div className="wine">
          <h3>Wine pairing</h3>
          <p>{recipe.winePairing.pairingText}</p>
        </div>
        }     
        
      </div>
    </div>
  )
}

export default SingleRecipe