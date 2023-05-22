//styles
import './styles/SingleRecipe.css'

import LoadingAnimation from './Loadinganimation'

import { ChosenRecipeUrlBuilder } from '../hooks/urlbuilder'
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'

const SingleRecipe = ({ chosenRecipeId, setChosenRecipeId }) => {

  const [isOnloading, setIsOnloading] = useState(true)

  // make the fetch to get ingredients for a single recipe
  let { data: recipe, error: ingrError } = useFetch (ChosenRecipeUrlBuilder(chosenRecipeId))

  setTimeout(()=>{
    setIsOnloading(false)
  },1500)

  if(recipe){
    return (

      <div className="SingleRecipe modal-backdrop">
        <div className="modal">

          {isOnloading ? <LoadingAnimation/> : (          
          <>
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
                {recipe.extendedIngredients.map((item, index)=>(
                   <li key={item.id+index}> {/*index needed because faulty database*/}
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
          </>)
          }

          {ingrError && <h2>Error loading the recipe. Try again later</h2>}
        </div>
      </div>
    )
  }
}

export default SingleRecipe