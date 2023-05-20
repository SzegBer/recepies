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

function App() {
  const [ chosenRecipeId, setChosenRecipeId ] = useState()
  const [ filterOptions, setFilterOptions ] = useState({
    cuisine: '',
    diet: null,
    type: '',
  })

  // make the fetch to fill up ListRecipes component
  let { data: recipesList, error: listError } = useFetch(FiltersUrlBuilder(filterOptions, 9))

  // make the fetch to get ingredients for a single recipe
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
      {listError && <div className='error'>
        <h2>Something went wrong... :( </h2>
        <p>My demo page uses a free but limited access API, and it seems  it has reached it's daily limit for the get requests.</p>
        <p>If you are interested how this page works, please come back tomorrow</p>
        <h2>Meanwhile you can check my gitHub repo for this project <a href="https://github.com/SzegBer/recipes-react-app">here</a></h2>
        <pre>Error: {listError}</pre>
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
