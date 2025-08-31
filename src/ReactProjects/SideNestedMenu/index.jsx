import { createRoot } from "react-dom/client"
import App from "./App"
import { CgMenuOreos } from "react-icons/cg"
import menus from "./tree-view/data"

const root = createRoot(document.querySelector('#root'))

root.render(
  <App menus={menus}/>
)
