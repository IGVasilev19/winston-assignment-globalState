import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"
import type { TodoListItemProps } from "@/types/types"

const TodoListItem = ({ todo }: TodoListItemProps) => {
  return (
    <Link
      to={`/todo/${todo.id}`}
      className="flex min-h-16 w-full items-center justify-between rounded-xl border border-gray-300 p-3 hover:bg-gray-300 sm:h-20"
    >
      <Checkbox
        className="size-5 shrink-0 rounded-full border border-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white sm:size-6"
        checked={todo.completed}
      />
      <div className="flex flex-col gap-1">
        <p className="text-end text-sm font-bold text-black sm:text-lg">
          {todo.title}
        </p>
        <p className="text-end text-xs text-gray-500 sm:text-sm">
          {new Date(todo.id).toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  )
}

export default TodoListItem
