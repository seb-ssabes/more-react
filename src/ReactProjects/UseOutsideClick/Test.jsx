import { useRef, useState } from "react"
import UseOutsideClick from "./App"

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false)
  const ref = useRef()
  UseOutsideClick(ref, () => setShowContent(false))

  return (
    <div>
      {
        showContent
        ? (
        <div ref={ref}>
          <h1>Random content</h1>
          <p>Please click outside of this to close it.</p>
        </div>
        ) : ( <button onClick={() => setShowContent(true)}>Show Content</button> )
      }
    </div>
  )

}
