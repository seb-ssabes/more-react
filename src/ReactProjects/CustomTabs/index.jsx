import { createRoot } from "react-dom/client"
import App from "./App"
import TabTest from "./TabTest"

const root = createRoot(document.querySelector('#root'))

root.render(
  <TabTest />
)
