import React from "react"

const FilterSuboptions = (array) => {

  const suboptions = array.suboptions
  const change = array.change

  return (
    suboptions.map((suboptions, i) => (
      <React.Fragment key={suboptions.name+i}>
        <button value={suboptions.value} onClick={change}>{suboptions.name}</button>
      </React.Fragment>
    ))
  )
}

export default FilterSuboptions