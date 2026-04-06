import { CircleCheckBig, ClipboardList, Clock } from "lucide-react"
import { useGlobalContext } from "@/context/global-context"

const TodoStatsBar = () => {
  const { todos } = useGlobalContext()

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
      <div className="flex h-16 items-center justify-between rounded-xl border border-gray-300 p-2 sm:h-20 sm:p-3">
        <ClipboardList className="size-6 text-blue-600 sm:size-8" />
        <div className="flex flex-col">
          <h1 className="text-xs text-gray-500 sm:text-sm">Total</h1>
          <p className="text-end text-xl font-bold text-black sm:text-2xl">
            {todos.length}
          </p>
        </div>
      </div>
      <div className="flex h-16 items-center justify-between rounded-xl border border-gray-300 p-2 sm:h-20 sm:p-3">
        <Clock className="size-6 text-yellow-500 sm:size-8" />
        <div className="flex flex-col">
          <h1 className="text-xs text-gray-500 sm:text-sm">Active</h1>
          <p className="text-end text-xl font-bold text-black sm:text-2xl">
            {todos.filter((todo) => !todo.completed).length}
          </p>
        </div>
      </div>
      <div className="flex h-16 items-center justify-between rounded-xl border border-gray-300 p-2 sm:h-20 sm:p-3">
        <CircleCheckBig className="size-6 text-green-600 sm:size-8" />
        <div className="flex flex-col">
          <h1 className="text-xs text-gray-500 sm:text-sm">Done</h1>
          <p className="text-end text-xl font-bold text-black sm:text-2xl">
            {todos.filter((todo) => todo.completed).length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TodoStatsBar
