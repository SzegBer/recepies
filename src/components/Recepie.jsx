// single recepie display

import { useFetch } from '../hooks/useFetch'
import './styles/Recepie.css'


const Recepie = (props) => {

  // receive options
  // assemble the right url for the fetch
  // fetch and give the data to map function to display a few of them.

  const options = props.options

  const urlBuilder = () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'
    const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'

    const cuisine = options.cuisine
    const diet = options.diet
    const type = options.type
    const maxReadyTime = options.maxReadyTime
    const nr = options.nr
  
    return `${baseUrl}?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}&maxReadyTime=${maxReadyTime}&number=${nr}`
  }

  console.log("feccs",url)
  //console.log(options)
  let url = urlBuilder()
  const { data: recepies } = useFetch(url)

  return (
    <div className="recepies">
      <h2>RANDOM RECEPIES</h2>

      <div className="hits">
        {
        recepies && recepies.results.map((recepie) => (
          <div className="recepie" key={recepie.id}>
            <img className="picture" src={recepie.image} alt={recepie.title} />
            <h3 className="title">{recepie.title}</h3>
          </div> 
        ))
        }
      </div>
    </div>
  )
}

export default Recepie;