// single recepie display

import './styles/Recepie.css'


const Recepie  = () => {

  // receive params.cuisine / params.diet / params.type
  // assemble the right url for the fetch
  // fetch and give the data to map function to display a few of them.

  return (
    <div className="hits">
      <div className="recepie">  {/*MAPPELNI*/ }
        <img className="picture" src="https://spoonacular.com/recipeImages/716429-556x370.jpg" alt="Pasta" />
        <h2 className="title">title: Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h2>
        <p className="ready">readyInMinutes: 45</p>
        <p className="source">sourceName: Full Belly Sisters</p>
        <p className="cuisines">cuisines: []</p>
        <div className="diets">
          <p>glutenFree: false</p>
          <p>dairyFree: false</p>
          <p>vegan: false</p>
          <p>vegetarian: false</p>
        </div>
      </div>  
      <div className="recepie">   {/*TÖRÖLHETŐ*/ }
        <img className="picture" src="https://spoonacular.com/recipeImages/716429-556x370.jpg" alt="Pasta" />
        <h2 className="title">title: Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h2>
        <p className="ready">readyInMinutes: 45</p>
        <p className="source">sourceName: Full Belly Sisters</p>
        <p className="cuisines">cuisines: []</p>
        <div className="diets">
          <p>glutenFree: false</p>
          <p>dairyFree: false</p>
          <p>vegan: false</p>
          <p>vegetarian: false</p>
        </div>
      </div>  
    </div>
    
  )
}

export default Recepie;