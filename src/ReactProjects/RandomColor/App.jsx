import React from "react"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = React.useState('hex')
  const [color, setColor] = React.useState("#000000")

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handleCreateRandomHexColor() {
    const hex = [0,1,2,3,4,5,6,7,8,9,"a", "b", "c", "d", "e", "f"]

    let hexColor = "#"

    for(let i=0; i<6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    console.log(hexColor)
    setColor(hexColor)
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  React.useEffect(() => {
    if(typeOfColor === "rgb") handleCreateRandomRgbColor()
    else handleCreateRandomHexColor()
  }, [typeOfColor])

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
        <button
          onClick=
          {
            typeOfColor === 'hex' ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
          }
        >Generate Random Color
        </button>
        <div className="text-items" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: '#fff',
          fontSize: "60px",
          marginTop: "50px"
        }}>
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
    </div>
  )
}
