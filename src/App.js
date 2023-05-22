//styles
import './App.css';

//react & other stuff
import { useState } from 'react';
import { ChosenRecipeUrlBuilder, FiltersUrlBuilder } from './hooks/urlbuilder';
import { useFetch } from './hooks/useFetch';

// components
import Filters from './components/Filters';
import ListRecipes from './components/ListRecipes';
import SingleRecipe from './components/SingleRecipe';
import Error from './components/Error';

function App() {
  const [ chosenRecipeId, setChosenRecipeId ] = useState()
  const [ filterOptions, setFilterOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
  })

  // make the fetch to fill up ListRecipes component
  let { data: recipesList, error: listError } = useFetch(FiltersUrlBuilder(filterOptions, 3))

  // make the fetch to get ingredients for a single recipe
  let { data: recipe, error: ingrError } = useFetch(ChosenRecipeUrlBuilder(chosenRecipeId))

  return (
    <div className="App">
      <h1>Welcome to yummy recipes!</h1>
      <h3>Browse our recipes below or use the filters to adjust the list to your taste</h3>

      <Filters 
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />

      {recipesList && <ListRecipes 
        recipesList={recipesList}
        setChosenRecipeId={setChosenRecipeId}
        filterOptions={filterOptions}
      />}

      {listError && <Error listError={listError}/>}

      {chosenRecipeId && <SingleRecipe
        recipe={recipe}
        chosenRecipeId={chosenRecipeId}
        setChosenRecipeId={setChosenRecipeId}
      />}

    </div>
  );
}

export default App;
