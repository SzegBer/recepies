import './styles/Error.css'

const Error = ({listError}) => {

  return (
    <div className='error'>
      <h2>Something went wrong... :( </h2>
      <p>My demo page uses a free but limited access API, and it seems  it has reached it's daily limit for the get requests.</p>
      <p>If you are interested how this page works, please come back tomorrow</p>
      <h2>Meanwhile you can check my gitHub repo for this project <a href="https://github.com/SzegBer/recipes-react-app">here</a></h2>
      <pre>Error: {listError}</pre>
    </div>
  )

}

export default Error