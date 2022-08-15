import { useTodos } from "TodoList/modules/TodosProvider";
import { TodoItem } from "./TodoItem";

export const TodoListItems = () => {
  const { todos } = useTodos();

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  )
}