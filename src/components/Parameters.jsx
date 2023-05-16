// you can chose the parameters for the recepie you are searching for

import './styles/Parameters.css'

import React, { useState, useEffect, useCallback } from "react";
import { types, diets, cuisines } from './db/data.js'

import Recipe from "./Recipe";
import Suboptions from "./Suboptions";

const Parameters = () => {
  
  const [ showCuisineOptions, setShowCuisineOptions ] = useState(false)
  const [ showTypeOptions, setShowTypeOptions ] = useState(false)
  const [ showDietOptions, setShowDietOptions ] = useState(false)

  const [ options, setOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
    maxReadyTime: '60',
    nr: '3'
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

  // changes 'options' state _type_ or _cuisine_ property value (to a single value) + toggles classNames
  const changeFilter = (e) => {
    let property = e.target.parentElement.classList[1]

    setOptions({
      ...options,
      [property]: e.target.value
    })
    
    const classToggler = (property) => {
      let els = document.querySelector(`.${property}`).getElementsByClassName('chosed')
      if(els){
        while (els[0]) {
          els[0].classList.remove('chosed')
        }
      }
      e.target.className = 'chosed'
    }
    classToggler(property)
  }

  // updates 'options' state _diet_ property value (to multi values) + toggles classNames
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

  return (
    <div className="parameters">

      <button className="options" value="cuisine" onClick={displayOptions}>filter by cuisine</button>
      <div className="filter cuisine">
        {showCuisineOptions && <Suboptions suboptions={cuisines} changeStg={changeFilter}/>}
      </div>

      <button className="options" value="type" onClick={displayOptions}>filter by type</button>
      <div className="filter type">
        {showTypeOptions && <Suboptions suboptions={types} changeStg={changeFilter}/>}
      </div>

      <button className="options" value="diet" onClick={displayOptions}>filter by diet</button>
      <div className="filter diet">
        {showDietOptions && <Suboptions suboptions={diets} changeStg={changeDiet}/>}
      </div>

      <button className='options'>Let's see the recepies</button>

      <Recipe options={options} />
      
    </div>
  )

}

export default Parameters;