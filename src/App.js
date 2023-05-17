
// make options state - give the setState to Filters

import { useCallback, useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import ListRecipes from './components/ListRecipes';

import { FiltersUrlBuilder } from './components/db/urlbuilder';
import { useFetch } from './hooks/useFetch';
import SingleRecipe from './components/SingleRecipe';


function App() {
  const [ chosenRecipeId, setChosenRecipeId ] = useState()
  const [ showListRecipes, setShowListRecipes ] = useState(false)
  const [ filterOptions, setFilterOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
  })

  // make the fetch to fill up ListRecipes component
  let result = useFetch(FiltersUrlBuilder(filterOptions, 3))
  setTimeout(() => {
    setShowListRecipes(true)
  }, 500);





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
        setChosenRecipeId={setChosenRecipeId}
      />}



    </div>
  );
}






export default App;
