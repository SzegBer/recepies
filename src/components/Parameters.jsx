// you can chose the parameters for the recepie you are searching for

import React, { useState, useEffect, useCallback } from "react";
import Recepie from "./Recepie";
import './styles/Parameters.css'

const Parameters = () => {
  
  const [ showCuisineOptions, setShowCuisineOptions ] = useState(false)
  const [ showTypeOptions, setShowTypeOptions ] = useState(false)
  const [ showDietOptions, setShowDietOptions ] = useState(false)
  //const chosedAsParameter = false

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

  // changes options state _cuisine property_ value (single value)
  const changeCuisine = (e) => {

    setOptions({
      ...options,
      cuisine: e.target.value
    })
    let els = document.querySelector('.cuisine').getElementsByClassName('chosed')
    if(els){
      while (els[0]) {
        els[0].classList.remove('chosed')
      }
    }
    e.target.className = 'chosed'
  }
  
  // changes options state _type property_ value (single value)
  const changeType = (e) => {
    setOptions({
      ...options,
      type: e.target.value
    })
    let els = document.querySelector('.type').getElementsByClassName('chosed')
    if(els){
      while (els[0]) {
        els[0].classList.remove('chosed')
      }
    }
    e.target.className = 'chosed'
  }


  // updates options state _diet property_ value (multi values) + toggles classNames
  const changeDiet = (e) => {
    if(options.diet === null){
      setOptions({
        ...options,
        diet: e.target.value
      })
    }
    else if (options.diet.includes(e.target.value)) {
      setOptions({
        ...options,
        diet: options.diet.replace(`,${e.target.value}`, "")
      })
    }
    else {
      setOptions({
        ...options,
        diet: options.diet+","+e.target.value
      })
    }

    if(e.target.className === ""){
      e.target.className = "chosed"
    } else {
      e.target.className = ""
    }
  }

  const cuisines = ["African", "American", "Caribbean", "Chinese", "French", "Greek", "Indian", "Italian", "Japanese", "Mexican", "Thai"]

  const types = [
    { name: 'main course', value: 'main%20course'},
    { name: 'side dish', value: 'side%20dish'},
    { name: 'dessert', value: 'dessert'},
    { name: 'appetizer', value: 'appetizer'},
    { name: 'breakfast', value: 'breakfast'},
    { name: 'soup', value: 'soup'},
    { name: 'snack', value: 'snack'},
    { name: 'drink', value: 'drink'}
  ]

  const diets = [
    { name: 'vegetarian', value: 'vegetarian'},
    { name: 'vegan', value: 'vegan'},
    { name: 'dairy free', value: 'dairyFree'},
    { name: 'gluten free', value: 'glutenFree'}
  ]


  return (
    <div className="parameters">

      <button className="options" value="cuisine" onClick={displayOptions}>search by cuisine</button>
      <div className="filter cuisine">
        {showCuisineOptions && cuisines.map((cuisine, i) => (
          <React.Fragment key={cuisine+i}>
            <button value={cuisine} onClick={changeCuisine}>{cuisine}</button>
          </React.Fragment>
        ))}
      </div>    

      <button className="options" value="type" onClick={displayOptions}>search by type</button>
      <div className="filter type">
        {showTypeOptions && types.map((type, i) => (
          <React.Fragment key={type.name+i}>
            <button value={type.value} onClick={changeType}>{type.name}</button>
          </React.Fragment>
        ))}
      </div>
      

      <button className="options" value="diet" onClick={displayOptions}>search by diet</button>
        <div className="filter diet">
          {showDietOptions && diets.map((diet,i) => (
            <React.Fragment key={diet.name+i}>
              <button value={diet.value} onClick={changeDiet}>{diet.name}</button>
            </React.Fragment>
          ))}
        </div>

      {/*<Recepie options={options} />*/}
      
    </div>
  )

}

export default Parameters;