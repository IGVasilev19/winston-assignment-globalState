import { useGlobalContext } from "@/context/global-context"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  CircleCheckBig,
  ClipboardList,
  Clock,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react"
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
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const TodoListPage = () => {
  const { todos, deleteTodo, editTodo, addTodo } = useGlobalContext()

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    addTodo(title, description)
    setTitle("")
    setDescription("")
    setOpen(false)
  }

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 overflow-hidden bg-white px-4 py-6 sm:gap-5 sm:px-0 sm:py-8">
      {/* Header card */}
      <div className="flex h-fit w-full max-w-3xl flex-col gap-4 rounded-xl border border-gray-300 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black sm:text-3xl">
            Your todos
          </h1>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="text-sm sm:text-lg">
                Add <Plus className="size-4 sm:size-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <form onSubmit={handleSubmit}>
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
                      placeholder="Some todo name"
                      className="border border-gray-300 text-black"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="desc-1" className="text-lg text-black">
                      Description
                    </Label>
                    <Textarea
                      id="desc-1"
                      placeholder="Some description"
                      className="border border-gray-300 text-black"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Field>
                </FieldGroup>
                <DialogFooter className="mt-4">
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats row */}
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
      </div>

      {/* Todo list */}
      <div className="no-scrollbar flex h-125 w-full max-w-3xl flex-col gap-3 overflow-y-scroll rounded-xl border border-gray-300 p-4 sm:gap-5 sm:p-5">
        {todos
          .slice()
          .reverse()
          .map((todo) => (
            <Link
              to={`/todo/${todo.id}`}
              className="flex min-h-16 w-full items-center justify-between rounded-xl border border-gray-300 p-3 hover:bg-gray-300 sm:h-20"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Checkbox
                  className="size-5 shrink-0 rounded-full border border-blue-600 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-white sm:size-6"
                  checked={todo.completed}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-black sm:text-lg">
                    {todo.title}
                  </p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    {new Date(todo.id).toLocaleDateString("nl-NL", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Icon-only on mobile, text+icon on desktop */}
              <div className="flex shrink-0 gap-1 sm:gap-2">
                <Button
                  size="icon"
                  className="size-8 sm:size-auto sm:px-4"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/todo/${todo.id}?edit=true`)
                  }}
                >
                  <Pencil className="size-4" />
                  <span className="hidden sm:inline">Edit</span>
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  className="size-8 sm:size-auto sm:px-4"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <Trash2 className="size-4" />
                  <span className="hidden sm:inline">Delete</span>
                </Button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default TodoListPage
