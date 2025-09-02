import { useState } from "react"
import Modal from "./Modal"


export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false)

  function toggleShowModal() {
    setShowModalPopup(prev => !prev)
  }

  function onClose() {
    setShowModalPopup(false)
  }

  console.log(showModalPopup)

  return (
    <div>
      <button onClick={toggleShowModal}>Open Modal Popup</button>

      {
        showModalPopup &&
          <Modal
            header={<div>Customized header</div>}
            body={<div>Customized body</div>}
            footer={<div>Customized footer</div>}
            onClose={onClose}
          />
      }
    </div>
  )
}
