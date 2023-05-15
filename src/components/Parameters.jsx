// you can chose the parameters for the recepie you are searching for

import { useState, useEffect, useCallback } from "react";
import Recepie from "./Recepie";



const Parameters = () => {
  
  const [ showCuisineOptions, setShowCuisineOptions ] = useState(false)
  const [ showTypeOptions, setShowTypeOptions ] = useState(false)
  const [ showDietOptions, setShowDietOptions ] = useState(false)
  const [ options, setOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
    maxReadyTime: '60',
    nr: '6'
  })

  // hides / shows the sub-options of the selected option
  const displayOptions = (e) => {

    switch(e.target.value){
      case 'cuisine':
        showCuisineOptions ? setShowCuisineOptions(false) : setShowCuisineOptions(true);
        break
      
      case 'type':
        showTypeOptions ? setShowTypeOptions(false) : setShowTypeOptions(true);
        break

      case 'diet':
        showDietOptions ? setShowDietOptions(false) : setShowDietOptions(true);
        break
      
      default:
        console.log('switch default case, Error in target value!')
    }    
  }

  // changes options state cuisine property value (single value)
  const changeCuisine = (e) => {
    setOptions({
      ...options,
      cuisine: e.target.value
    })
  }
  
  // changes options state type property value (single value)
  const changeType = (e) => {
    setOptions({
      ...options,
      type: e.target.value
    })
  }

  // changes options state diet property value (multi values)
  const changeDiet = (e) => {
    if(options.diet === null){
      setOptions({
        ...options,
        diet: e.target.name
      })
    }
    else if (options.diet.includes(e.target.name)) {
      setOptions({
        ...options,
        diet: options.diet.replace(`,${e.target.name}`, "")
      })
    }
    else {
      setOptions({
        ...options,
        diet: options.diet+","+e.target.name
      })
    }  
  }

  // building the url for the fetch based on the option states
  let url = ""
  const urlBuilder = () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'

    const cuisine = options.cuisine
    const diet = options.diet
    const type = options.type
    const maxReadyTime = options.maxReadyTime
    const nr = options.nr
  
    url = `${baseUrl}?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}&maxReadyTime=${maxReadyTime}&number=${nr}`
  }
  urlBuilder()

  return (
    <div className="parameters">

      <button value="cuisine" onClick={displayOptions}>search by cuisine</button>
      {
        showCuisineOptions && 
        <div className="filter cuisine">
          <button value="African" onClick={changeCuisine}>African</button>
          <button value="American" onClick={changeCuisine}>American</button>
          <button value="Caribbean" onClick={changeCuisine}>Caribbean</button>
          <button value="Chinese" onClick={changeCuisine}>Chinese</button>
          <button value="French" onClick={changeCuisine}>French</button>
          <button value="Greek" onClick={changeCuisine}>Greek</button>
          <button value="Indian" onClick={changeCuisine}>Indian</button>
          <button value="Italian" onClick={changeCuisine}>Italian</button>
          <button value="Japanese" onClick={changeCuisine}>Japanese</button>
          <button value="Mexican" onClick={changeCuisine}>Mexican</button>
          <button value="Thai" onClick={changeCuisine}>Thai</button>
        </div>
      }       

      <button value="type" onClick={displayOptions}>search by type</button>
      {
        showTypeOptions &&
        <div className="filter type">
          <button value="main%20course" onClick={changeType}>main course</button>
          <button value="side%20dish" onClick={changeType}>side dish</button>
          <button value="dessert" onClick={changeType}>dessert</button>
          <button value="appetizer" onClick={changeType}>appetizer</button>
          <button value="breakfast" onClick={changeType}>breakfast</button>
          <button value="soup" onClick={changeType}>soup</button>
          <button value="snack" onClick={changeType}>snack</button>
          <button value="drink" onClick={changeType}>drink</button>
        </div>
      }

      <button value="diet" onClick={displayOptions}>search by diet</button>
      {
        showDietOptions &&
        <div className="filter diet">
          <label>
            <span>Vegetarian</span>
            <input type="checkbox" name="vegetarian" onClick={changeDiet}></input>
          </label>
          <label>
            <span>Vegan</span>
            <input type="checkbox" name="vegan" onClick={changeDiet}></input>
          </label>
          <label>
            <span>Dairy Free</span>
            <input type="checkbox" name="dairyFree" onClick={changeDiet}></input>
          </label>
          <label>
            <span>Gluten Free</span>
            <input type="checkbox" name="glutenFree" onClick={changeDiet}></input>
          </label>
        </div>
      }

      <Recepie filters={url} />
      
    </div>
  )

}

export default Parameters;