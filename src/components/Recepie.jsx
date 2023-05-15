// single recepie display

import { useFetch } from '../hooks/useFetch'
import './styles/Recepie.css'


const Recepie  = (props) => {

  // receive options
  // assemble the right url for the fetch
  // fetch and give the data to map function to display a few of them.

  let options = props.options
  console.log(options)

  let baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
  let apiKey = 'f9d7f1bf8069414388b168f2bd13947b'

  let cuisine = 'italian'
  let diet = ''
  let type = ''
  let maxReadyTime = '60'
  let nr = '6'

  let url = `${baseUrl}?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}&maxReadyTime=${maxReadyTime}&number=${nr}`

  /*let { data } = useFetch(url)
  console.log(data)*/

  return (
    <div className="hits">

      <div className="recepie">  {/*MAPPELNI*/}
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