import { createRoot } from "react-dom/client"
import UseWindowResizeTest from "./Test"

const root = createRoot(document.querySelector('#root'))

root.render(
  <UseWindowResizeTest />
)
