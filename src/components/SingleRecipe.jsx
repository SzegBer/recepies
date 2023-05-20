import { useState } from "react"
import { ChosenRecipeUrlBuilder } from "../hooks/urlbuilder"
import { useFetch } from "../hooks/useFetch"
import './styles/SingleRecipe.css'

const SingleRecipe = (props) => {

  const chosenRecipeId = props.chosenRecipeId
  const setChosenRecipeId = props.setChosenRecipeId
  const details = props.ingredients



  //const ingredients = props.result
  //console.log(ingredients)


    if(details)
    return (
      <div className="SingleRecipe modal-backdrop">
      <div className="modal">

        <div className="title">
          <img src={details.image} alt={details.title} />
          <h2>{details.title}</h2>
        </div>

        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {details.extendedIngredients.map((item)=>(
              <li>
                <span>{Math.floor(item.measures.metric.amount)}</span> 
                <span>{item.measures.metric.unitShort}</span>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="information">
          <h3>Information</h3>
        </div>

        <p>winePairing.pairingText milyen bor</p>
        <p><span>servings: </span>2</p>
        <p><span>readyInMinutes: </span>45 mins</p>
        <p><span>sourceName: </span>Full Belly Sisters</p>
        

        <h2>Instructions:</h2>
        <button onClick={()=>(setChosenRecipeId())}>Close</button>

      </div>

    </div>


    

  )
}

export default SingleRecipe