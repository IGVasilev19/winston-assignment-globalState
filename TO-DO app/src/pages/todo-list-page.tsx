import { useGlobalContext } from "@/context/global-context"
import { Checkbox } from "@/components/ui/checkbox"

const TodoListPage = () => {
  const { todos, markComplete } = useGlobalContext()
  console.log(todos)
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
      <div className="mx-auto no-scrollbar flex h-125 w-[90%] max-w-3xl flex-col gap-5 overflow-scroll rounded-xl border-2 border-gray-300 p-5">
        <h1 className="text-3xl font-bold text-black">Your todos</h1>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex h-20 w-full justify-between rounded-xl border-2 border-gray-300 p-3"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                className="size-6 rounded-full border-2 border-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white"
                checked={todo.completed}
                onCheckedChange={() => markComplete(todo.id)}
              />
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold text-black">{todo.title}</p>
                <p className="text-sm text-gray-500">
                  Created:{" "}
                  {new Date(todo.id).toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div>
              <button>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoListPage
