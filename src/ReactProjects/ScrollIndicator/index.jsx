import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.querySelector('#root'))

root.render(
  <App url={'https://dummyjson.com/products?limit=100'}/>
)
