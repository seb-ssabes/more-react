import { createRoot } from "react-dom/client"
import App from "./App"
import { GrTestDesktop } from "react-icons/gr"
import UseFetchHookTest from "./Test"

const root = createRoot(document.querySelector('#root'))

root.render(
  <UseFetchHookTest />
)
