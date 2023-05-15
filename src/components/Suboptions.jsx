import React from "react"

const Suboptions = (array) => {

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

export default Suboptions