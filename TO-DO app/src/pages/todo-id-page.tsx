import { useState } from "react"
import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import { useGlobalContext } from "@/context/global-context"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import TodoStatusBadge from "@/components/todos/TodoStatusBadge"
import TodoCardActions from "@/components/todos/TodoCardActions"

const TodoIdPage = () => {
  const { id } = useParams()
  const { todos, markComplete, deleteTodo, editTodo } = useGlobalContext()
  const navigate = useNavigate()

  const todo = todos.find((t) => t.id === Number(id))

  const [searchParams] = useSearchParams()
  const [isEditing, setIsEditing] = useState(
    searchParams.get("edit") === "true"
  )
  const [editTitle, setEditTitle] = useState(todo?.title ?? "")
  const [editDescription, setEditDescription] = useState(
    todo?.description ?? ""
  )

  if (!todo)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">Todo not found.</p>
      </div>
    )

  const handleSave = () => {
    if (!editTitle.trim()) return
    editTodo(todo.id, editTitle, editDescription)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setEditTitle(todo.title)
    setEditDescription(todo.description)
    setIsEditing(true)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white px-4 py-8 sm:px-0">
      <div className="w-full max-w-xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>

        <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <TodoStatusBadge completed={todo.completed} />
            <TodoCardActions
              isEditing={isEditing}
              onEdit={handleEdit}
              onCancelEdit={() => setIsEditing(false)}
              onDelete={() => {
                deleteTodo(todo.id)
                navigate(-1)
              }}
            />
          </div>

          <div className="h-px bg-gray-100" />

          <div>
            <p className="mb-1 text-xs tracking-widest text-gray-400 uppercase">
              Title
            </p>
            {isEditing ? (
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border border-gray-300 text-black"
              />
            ) : (
              <h1 className="text-2xl font-bold text-black sm:text-3xl">
                {todo.title}
              </h1>
            )}
          </div>

          <div>
            <p className="mb-1 text-xs tracking-widest text-gray-400 uppercase">
              Description
            </p>
            {isEditing ? (
              <Textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="border border-gray-300 text-black"
              />
            ) : (
              <p className="text-base leading-relaxed text-gray-600">
                {todo.description || "No description provided."}
              </p>
            )}
          </div>

          <div>
            <p className="mb-1 text-xs tracking-widest text-gray-400 uppercase">
              Created
            </p>
            <p className="text-sm text-gray-500">
              {new Date(todo.id).toLocaleDateString("nl-NL", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="h-px bg-gray-100" />

          {isEditing ? (
            <Button onClick={handleSave} className="w-full">
              Save changes
            </Button>
          ) : (
            <Button
              onClick={() => markComplete(todo.id)}
              variant={todo.completed ? "destructive" : "default"}
              className="w-full"
            >
              {todo.completed ? "Mark as incomplete" : "Mark as complete"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoIdPage
