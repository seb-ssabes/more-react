import { useRef } from "react"



export default function ScrollToSection() {
  const ref = useRef()

  const data = [
    {
      label: 'First Card',
      style: {
        background: 'red',
        width: '100%',
        height: '600px'
      }
    },
    {
      label: 'Second Card',
      style: {
        background: 'green',
        width: '100%',
        height: '600px'
      }
    },
    {
      label: 'Third Card',
      style: {
        background: 'blue',
        width: '100%',
        height: '600px'
      }
    },
    {
      label: 'Fourth Card',
      style: {
        background: 'yellow',
        width: '100%',
        height: '600px'
      }
    },
    {
      label: 'Fifth Card',
      style: {
        background: 'purple',
        width: '100%',
        height: '600px'
      }
    }
  ]

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top
    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <h1>Scroll to Section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {
        data.map((dataItem, index) => (
          <div style={dataItem.style} ref={index === 4  ? ref : null}>
            <h3>{dataItem.label}</h3>
          </div>)
        )
      }
    </div>
  )
}
