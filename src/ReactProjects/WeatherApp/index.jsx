import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import Search from "./Search"
import Weather from "./Weather"

const root = createRoot(document.querySelector('#root'))

root.render(
  <Weather />
)
