// you can chose the parameters for the recepie you are searching for

import { useCallback, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Recepie from "./Recepie";

const eredetiURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch'

const Parameters = () => {

  let cuisine = 'italian'
  let diet = ''
  let type = ''
  let maxReadyTime = '60'
  let nr = '6'

  let baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
  let apiKey = 'f9d7f1bf8069414388b168f2bd13947b'

  let url = `${baseUrl}?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}&maxReadyTime=${maxReadyTime}&number=${nr}`

  let { data } = useFetch(url)
  console.log(data)







  return (
    <div className="parameters">

      <button>search by cuisine</button>
        <div className="filter cuisine">
          <button>African</button>
          <button>American</button>
          <button>Caribbean</button>
          <button>Chinese</button>
          <button>French</button>
          <button>Greek</button>
          <button>Indian</button>
          <button>Japanese</button>
          <button>Mexican</button>
          <button>Thai</button>
        </div>

      {/*<button>search by type</button>
        <div className="filter type">
          <button>breakfast</button>
          <button>main course</button>
          <button>dessert ... etc</button>
        </div>

      <button>search by diet</button>
      <div className="filter diet">
        <label>
          <span>Vegetarian</span>
          <input type="checkbox" name="vegetarian"></input>
        </label>
        <label>
          <span>Vegan</span>
          <input type="checkbox" name="vegan"></input>
        </label>
        <label>
          <span>Dairy Free</span>
          <input type="checkbox" name="dairyFree"></input>
        </label>
        <label>
          <span>Gluten Free</span>
          <input type="checkbox" name="glutenFree"></input>
        </label>
      </div>*/}

      <button>START THE SEARCH</button>
      <Recepie />

    </div>
  )

}

export default Parameters;