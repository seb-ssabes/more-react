import { useState } from "react"
import QRCode from "react-qr-code"



export default function QrGenerator() {
  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState("")
  const [qrText, setQrText] = useState("")

  function handleQrGeneration(e) {
    e.preventDefault()
    setQrCode(input)
    setQrText(input)
    setInput("")
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <form onSubmit={handleQrGeneration}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text" name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
        <button
          type="submit"
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </form>
      <div className="qr-container">
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="#fff"
        />
        {qrText && (
          <p style={{ marginTop: "1rem", fontSize: "1.4rem", fontWeight: "500" }}>
            {qrText}
          </p>
        )}
      </div>
    </div>
  )
}
