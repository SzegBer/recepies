
const baseUrl = 'https://api.spoonacular.com/recipes'
const apiKey = 'f9d7f1bf8069414388b168f2bd13947b'


const FiltersUrlBuilder = (object, nr) => {

  let cuisine = object.cuisine
  let diet = object.diet
  let type = object.type

  return `${baseUrl}/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}&number=${nr}`
}




export { FiltersUrlBuilder }