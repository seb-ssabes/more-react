import MenuItem from "./menu-item"


export default function MenuList({list = []}) {
  return (
    <ul className="list-container">
      {
        list && list.length
        ? list.map(listItem => <MenuItem item={listItem}/>)
        : null
      }
    </ul>
  )
}
