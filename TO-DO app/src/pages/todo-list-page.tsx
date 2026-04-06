import { useGlobalContext } from "@/context/global-context"
import AddTodoDialog from "@/components/todos/AddTodoDialog"
import TodoStatsBar from "@/components/todos/TodoStatsBar"
import TodoListItem from "@/components/todos/TodoListItem"

const TodoListPage = () => {
  const { todos } = useGlobalContext()

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 overflow-hidden bg-white px-4 py-6 sm:gap-5 sm:px-0 sm:py-8">
      <div className="flex h-fit w-full max-w-3xl flex-col gap-4 rounded-xl border border-gray-300 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black sm:text-3xl">
            Your todos
          </h1>
          <AddTodoDialog />
        </div>

        <TodoStatsBar />
      </div>

      <div className="no-scrollbar flex h-125 w-full max-w-3xl flex-col gap-3 overflow-y-scroll rounded-xl border border-gray-300 p-4 sm:gap-5 sm:p-5">
        {todos
          .slice()
          .reverse()
          .map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  )
}

export default TodoListPage
