//react & other stuff
import React from "react"

const FilterSuboptions = ({suboptions, change}) => {

  return (
    suboptions.map((suboptions, i) => (
      <React.Fragment key={suboptions.name+i}>
        <button value={suboptions.value} onClick={change}>{suboptions.name}</button>
      </React.Fragment>
    ))
  )
}

export default FilterSuboptions