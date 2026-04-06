import type { TodoStatusBadgeProps } from "@/types/types"
import { CircleCheckBig, Clock } from "lucide-react"

const TodoStatusBadge = ({ completed }: TodoStatusBadgeProps) => {
  return (
    <span
      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
        completed
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {completed ? (
        <CircleCheckBig className="size-3.5" />
      ) : (
        <Clock className="size-3.5" />
      )}
      {completed ? "Completed" : "Active"}
    </span>
  )
}

export default TodoStatusBadge
