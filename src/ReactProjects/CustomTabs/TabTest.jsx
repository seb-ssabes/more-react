import App from "./App"


function RandomComponent() {
  return <h1>Some random language</h1>
}

export default function TabTest() {
  const tabs = [
    {
      label: "Hola",
      content: <div>This is Espańol</div>
    },
    {
      label: "Hello",
      content: <div>This is English</div>
    },
    {
      label: "Hallo",
      content: <RandomComponent />
    }
  ]

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex)
  }

  return (
    <App tabsContent={tabs} onChange={handleChange}/>
  )
}
