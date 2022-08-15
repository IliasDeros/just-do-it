import { createContext, useContext, useState } from "react"
import { Todo } from "./types"

export type TodosContextProps = {
  setTodos: (todos: Todo[]) => void
  todos: Todo[]
}

const TodosContext = createContext<TodosContextProps>([]);
export type TodosProviderProps = React.PropsWithChildren<{}>;

export const useTodos = () => useContext(TodosContext);
export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <TodosContext.Provider value={{ setTodos, todos }}>
      {children}
    </TodosContext.Provider>
  )
}