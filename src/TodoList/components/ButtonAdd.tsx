export type ButtonAddProps = React.HTMLAttributes<HTMLButtonElement>

export const ButtonAdd = (htmlProps: ButtonAddProps) => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" {...htmlProps}>
    Add Task
  </button>
)