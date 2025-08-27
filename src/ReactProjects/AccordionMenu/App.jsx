import { useState } from "react"
import data from "./data"

export default function Accordion() {
  const [selected, setSelected] = useState(null)
  const [multipleSelection, setMultipleSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function toggleMultipleSelection() {
    setMultipleSelection(prev => !prev)
    setSelected(null)
    setMultiple([])
  }

  function handleMultipleSelection(getCurrentId) {
    if (multiple.includes(getCurrentId)) {
      setMultiple(multiple.filter(id => id !== getCurrentId))
    } else {
      setMultiple([...multiple, getCurrentId])
    }
  }

  console.log(selected)

  return (
    <div className="wrapper">
      <button onClick={toggleMultipleSelection} className="content">Activate multiple selection</button>
      <div className="accordion">
        {
          data && data.length > 0 ?
          data.map(dataItem =>
            <div
              key={dataItem.id}
              className="item"
              onClick={multipleSelection ?
                () => handleMultipleSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)}
              >
                <div className="tittle">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
              {
                multipleSelection ? (
                  multiple.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  )
                ) : (
                  selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )
                )
              }
            </div>)
            : <div>No data found</div>
        }
      </div>
    </div>
  )
}
