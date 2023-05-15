// you can chose the parameters for the recepie you are searching for

import { useCallback, useEffect, useState } from "react";
import Recepie from "./Recepie";


const Parameters = () => {

  let options = {
    cuisine: 'italian',
    diet: '',
    type: '',
    maxReadyTime: '60',
    nr: '6'
  }



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
      <Recepie options={options}/>

    </div>
  )

}

export default Parameters;