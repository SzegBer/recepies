// single recepie display

import { useFetch } from '../hooks/useFetch'
import './styles/Recepie.css'


const Recepie = (props) => {

  // receive options
  // assemble the right url for the fetch
  // fetch and give the data to map function to display a few of them.

  const url = props.filters
  console.log("feccs",url)
  //console.log(options)

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