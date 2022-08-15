import { useState } from "react"
import { ButtonAdd } from "./ButtonAdd";
import { ModalAdd } from "./ModalAdd";
import { TodoListItems } from "./TodoListItems"
import { TodosProvider } from "TodoList/modules/TodosProvider";

export const TodoList = () => {
  const [showAdd, setShowAdd] = useState(false)

  const hideModal = () => setShowAdd(false)
  const showModal = () => setShowAdd(true)
  
  return (
    <TodosProvider>
      <div className="flex justify-between">
        <h1>Just Do It</h1>
        <ButtonAdd onClick={showModal} />
      </div>
      <TodoListItems />
      {showAdd && <ModalAdd hide={hideModal} />}
    </TodosProvider>
  )
}