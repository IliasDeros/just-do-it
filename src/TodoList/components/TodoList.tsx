import { useState } from "react"
import { ButtonAdd } from "./ButtonAdd";
import { ModalAdd } from "./ModalAdd";

export const TodoList = () => {
  const [showAdd, setShowAdd] = useState(false)

  const hideModal = () => setShowAdd(false)
  const showModal = () => setShowAdd(true)
  
  return (
    <div>
      <div className="flex justify-between">
        <h1>Just Do It</h1>
        <ButtonAdd onClick={showModal} />
      </div>
      {showAdd && <ModalAdd hide={hideModal} />}
    </div>
  )
}