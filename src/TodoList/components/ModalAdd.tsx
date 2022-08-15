import { useState } from "react"
import { useTodos } from "TodoList/modules/TodosProvider";
import { now } from "TodoList/modules/now";

export type ModalAddProps = {
  hide: () => void
}

export const ModalAdd = ({ hide }: ModalAddProps) => {
  const { setTodos, todos } = useTodos();
  const [todoText, setTodoText] = useState("");

  const addTodo = (text: string) => {
    setTodos([...todos, { text, created_at: now() }]);
  }

  const submit = () => {
    addTodo(todoText)
    hide()
  }

  return <div className="relative z-10" aria-labelledby="add-a-task" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex justify-center mt-8">
        <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="add-a-task">Add a task</h3>
                
                {/* Task Description */}
                <div className="mt-5">
                  <label htmlFor="task-description" className="block text-sm font-medium text-gray-700">
                    Task Description
                  </label>
                  <div className="mt-1 relative rounded-md shadow">
                    <input
                      type="text"
                      name="task-description"
                      id="task-description"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-4 sm:text-sm border-gray-500 rounded-md"
                      placeholder="Enter Text"
                      onChange={(e) => setTodoText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" onClick={submit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
            <button type="button" onClick={hide} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}