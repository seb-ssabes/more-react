import MenuList from "./tree-view/menu-list"


export default function NestedMenu({menus = []}) {


  return (
    <div className="menu-container">
      <MenuList list = {menus} />
    </div>
  )
}
