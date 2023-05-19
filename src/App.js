
// make options state - give the setState to Filters

import { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import ListRecipes from './components/ListRecipes';

import { FiltersUrlBuilder } from './components/db/urlbuilder';
import { UseFetch } from './hooks/UseFetch';
import SingleRecipe from './components/SingleRecipe';
import { ChosenRecipeUrlBuilder } from './hooks/urlbuilder';


function App() {
  const [ chosenRecipeId, setChosenRecipeId ] = useState()
  const [ showListRecipes, setShowListRecipes ] = useState(false)
  const [ filterOptions, setFilterOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
  })
  const [ingredients, setIngredients] = useState()

  // make the fetch to fill up ListRecipes component
  let result = UseFetch(FiltersUrlBuilder(filterOptions, 3))

  setTimeout(() => {
    setShowListRecipes(true)
  }, 500);
  
  function getChosenRecipe (){
    let info = UseFetch(ChosenRecipeUrlBuilder)
    setIngredients(info)
    console.log(ingredients)
  }



  // let ingredients = useFetch(ChosenRecipeUrlBuilder(chosenRecipeId))

  return (
    <div className="App">

      <h3>Browse our recipes below or use the filters to adjust the list to your taste</h3>

      <Filters 
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />

      {showListRecipes && <ListRecipes 
        result={result.data}
        setChosenRecipeId={setChosenRecipeId}
      />}

      {chosenRecipeId && <SingleRecipe
        ingredients={ingredients}
        chosenRecipeId={chosenRecipeId}
        setChosenRecipeId={setChosenRecipeId}
      />}



    </div>
  );
}






export default App;
