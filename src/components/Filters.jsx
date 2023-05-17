// you can chose the parameters for the recepie you are searching for

//styles
import './styles/Filters.css'

//react & other stuff
import React, { useState } from "react";
import { types, diets, cuisines } from './db/data.js'

// components
import Filters_Suboptions from "./Filters_Suboptions";

const Filters = (props) => {

  const filterOptions = props.filterOptions
  const setFilterOptions = props.setFilterOptions

  const [ showCuisineOptions, setShowCuisineOptions ] = useState(false)
  const [ showTypeOptions, setShowTypeOptions ] = useState(false)
  const [ showDietOptions, setShowDietOptions ] = useState(false)

  // hides / shows the sub-options of the selected filter
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

  // changes 'filterOptions' state _type_ & _cuisine_ property value (to a single value) + toggles classNames
  const changeFilter = (e) => {
    let property = e.target.parentElement.classList[1]
    setFilterOptions({
      ...filterOptions,
      [property]: e.target.value
    })

    // ClassName Toggler
    const classToggler = (property) => {
      let els = document.querySelector(`.${property}`).getElementsByClassName('chosen')
      if(els){
        while (els[0]) {
          els[0].classList.remove('chosen')
        }
      }
      e.target.className = 'chosen'
    }
    classToggler(property)
  }

  // updates 'filterOptions' state _diet_ property value (to multi values) + toggles classNames
  const changeDiet = (e) => {

    const diet = filterOptions.diet
    if(diet === null){
      setFilterOptions({
        ...filterOptions,
        diet: e.target.value
      })
    }
    else if (diet === e.target.value) {
      setFilterOptions((preFilterOptions)=>{
        return {
          ...preFilterOptions,
          diet: null
        }
      })
    }
    else if (diet.includes(e.target.value)) {
      setFilterOptions((preFilterOptions)=>{
        return {
          ...preFilterOptions,
          diet: diet.replace(`,${e.target.value}`, "")
        }
      })
    }
    else {
      setFilterOptions({
        ...filterOptions,
        diet: diet+","+e.target.value
      })
    }

    //ClassName Toggler
    e.target.className === "" ? e.target.className = "chosen" : e.target.className = "" 
  }

  return (
    <div className="parameters">

      <button className="options" value="cuisine" onClick={displayOptions}>filter by cuisine</button>
      <div className="filter cuisine">
        {showCuisineOptions && <Filters_Suboptions suboptions={cuisines} changeStg={changeFilter}/>}
      </div>

      <button className="options" value="type" onClick={displayOptions}>filter by type</button>
      <div className="filter type">
        {showTypeOptions && <Filters_Suboptions suboptions={types} changeStg={changeFilter}/>}
      </div>

      <button className="options" value="diet" onClick={displayOptions}>filter by diet</button>
      <div className="filter diet">
        {showDietOptions && <Filters_Suboptions suboptions={diets} changeStg={changeDiet}/>}
      </div>
      
    </div>
  )

}

export default Filters;


/*
    if(e.target.className === ""){
      e.target.className = "chosen"
    } else {
      e.target.className = ""
    }

*/