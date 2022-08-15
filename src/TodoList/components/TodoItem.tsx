import { Todo } from "TodoList/modules/types"
import { formatDate } from "TodoList/modules/formatDate";
import { useTodos } from "TodoList/modules/TodosProvider";
import { now } from "TodoList/modules/now";

export type TodoProps = {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoProps) => {
  const { setTodos, todos } = useTodos()
  const isComplete = todo.completed_at

  const completeTodo = () => {
    const isTodo = (t: Todo) => t.created_at === todo.created_at
    setTodos(todos.map(t => (isTodo(t) ? { ...t, completed_at: now() } : t)))
  }

  const CompleteButton = () => (
    <span className="text-blue-600 underline cursor-pointer" onClick={completeTodo}>Done</span>
  )

  return (
    <div className="rounded-lg shadow-lg p-4 mt-1">
      <div className="flex justify-between">
        <div className={isComplete && "line-through"}>{todo.text}</div>
        {isComplete ? <span className="text-green-600">{formatDate(todo.completed_at)}</span> : <CompleteButton />}
      </div>
      <div className="text-gray-500">
        {formatDate(todo.created_at)}
      </div>
    </div>
  )
}