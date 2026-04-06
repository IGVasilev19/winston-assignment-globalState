import { useGlobalContext } from "@/context/global-context"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { CircleCheckBig, ClipboardList, Clock, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const TodoListPage = () => {
  const { todos, markComplete, deleteTodo, editTodo } = useGlobalContext()
  console.log(todos)
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-white py-8">
      <div className="flex h-fit w-[90%] max-w-3xl flex-col gap-5 rounded-xl border border-gray-300 p-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-black">Your todos</h1>
          <div className="rounded-2xl bg-blue-800">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button className="text-lg">
                    Add <Plus className="size-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-black">
                      Add Todo
                    </DialogTitle>
                  </DialogHeader>
                  <FieldGroup>
                    <Field>
                      <Label htmlFor="name-1" className="text-lg text-black">
                        Title
                      </Label>
                      <Input
                        id="name-1"
                        name="name"
                        placeholder="Some todo name"
                        className="border border-gray-300"
                      />
                    </Field>
                    <Field>
                      <Label
                        htmlFor="username-1"
                        className="text-lg text-black"
                      >
                        Description
                      </Label>
                      <Textarea
                        id="username-1"
                        name="username"
                        placeholder="Some description"
                        className="border border-gray-300"
                      />
                    </Field>
                  </FieldGroup>
                  <DialogFooter className="flex items-center justify-center">
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-20 w-full items-center justify-between rounded-xl border border-gray-300 p-3">
            <ClipboardList className="size-8 text-blue-600" />
            <div className="flex flex-col">
              <h1 className="text-gray-500">Total</h1>
              <p className="text-end text-2xl font-bold text-black">
                {todos.length}
              </p>
            </div>
          </div>
          <div className="flex h-20 w-full items-center justify-between rounded-xl border border-gray-300 p-3">
            <Clock className="size-8 text-yellow-500" />
            <div className="flex flex-col">
              <h1 className="text-gray-500">Active</h1>
              <p className="text-end text-2xl font-bold text-black">
                {todos.filter((todo) => !todo.completed).length}
              </p>
            </div>
          </div>
          <div className="flex h-20 w-full items-center justify-between rounded-xl border border-gray-300 p-3">
            <CircleCheckBig className="size-8 text-green-600" />
            <div className="flex flex-col">
              <h1 className="text-gray-500">Completed</h1>
              <p className="text-end text-2xl font-bold text-black">
                {todos.filter((todo) => todo.completed).length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="no-scrollbar flex h-125 w-[90%] max-w-3xl flex-col gap-5 overflow-y-scroll rounded-xl border border-gray-300 p-5">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex h-20 w-full items-center justify-between rounded-xl border border-gray-300 p-3"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                className="size-6 rounded-full border border-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white"
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
            <div className="flex gap-2">
              <Button
                onClick={() => editTodo(todo.id, todo.title, todo.description)}
              >
                Edit
              </Button>
              <Button onClick={() => deleteTodo(todo.id)} variant="destructive">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoListPage
