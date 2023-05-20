//styles
import './styles/ListRecipes.css'

const ListRecipes = ({ recipesList, setChosenRecipeId }) => {

  const recipes = recipesList.results
  const totalResults = recipesList.totalResults

  if(totalResults === 0){
    return (
      <h3>Sorry, it seems like we do not have the recipe you are looking for. Please adjust the filters.</h3>
    )
  }


  return (

    <div className="recipes">
      <div className="hits">
        {recipes && recipes.map((recipe) => (
          <div className="recipe" key={recipe.id} onClick={() => (setChosenRecipeId(recipe.id))}>
            <img className="picture" src={recipe.image} alt={recipe.title} />
            <h3 className="title">{recipe.title}</h3>
          </div> 
        ))
        }
      </div>
    </div>
  )
}

export default ListRecipes;
