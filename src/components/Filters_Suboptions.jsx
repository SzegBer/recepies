import React from "react"

const Filters_Suboptions = (array) => {

  const suboptions = array.suboptions
  const change = array.changeStg

  return (
    suboptions.map((suboptions, i) => (
      <React.Fragment key={suboptions.name+i}>
        <button value={suboptions.value} onClick={change}>{suboptions.name}</button>
      </React.Fragment>
    ))
  )
}

export default Filters_Suboptions