import { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import ListRecipes from './components/ListRecipes';

import { FiltersUrlBuilder } from './components/db/urlbuilder';
import { useFetch } from './hooks/useFetch';
import SingleRecipe from './components/SingleRecipe';
import { ChosenRecipeUrlBuilder } from './hooks/urlbuilder';


function App() {
  const [ chosenRecipeId, setChosenRecipeId ] = useState()
  // const [ showListRecipes, setShowListRecipes ] = useState(false)
  const [ filterOptions, setFilterOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
  })
  //const [ingredients, setIngredients] = useState([])

  // make the fetch to fill up ListRecipes component
  let { 
    data: recipesList,
    error: listError } = useFetch(FiltersUrlBuilder(filterOptions, 3))


  let { data: recipe, error: ingrError } = useFetch(ChosenRecipeUrlBuilder(chosenRecipeId))




  return (
    <div className="App">

      <h3>Browse our recipes below or use the filters to adjust the list to your taste</h3>

      <Filters 
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />

      {recipesList && <ListRecipes 
        recipesList={recipesList}
        setChosenRecipeId={setChosenRecipeId}/>
      }
      {listError && <div>
        Something went wrong, please try again later...
        <pre>{listError}</pre>
        </div>
      }

      {chosenRecipeId && <SingleRecipe
        recipe={recipe}
        chosenRecipeId={chosenRecipeId}
        setChosenRecipeId={setChosenRecipeId}
      />}



    </div>
  );
}






export default App;
