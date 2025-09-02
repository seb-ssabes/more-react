export default function Suggestions({data, handleClick}) {
  return (
    <ul className="suggestions-list">
      {
        data && data.length
        ? data.map((item, index)=>
            <li
              onClick={handleClick}
              key={index}
              className="suggestion-item"
            >
              {item}
            </li>
          )
        : null
      }
    </ul>
  )
}
