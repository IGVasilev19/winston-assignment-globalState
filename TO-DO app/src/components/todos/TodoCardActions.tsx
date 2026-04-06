import { Button } from "@/components/ui/button"
import type { TodoCardActionsProps } from "@/types/types"
import { Pencil, Trash2 } from "lucide-react"

const TodoCardActions = ({
  isEditing,
  onEdit,
  onCancelEdit,
  onDelete,
}: TodoCardActionsProps) => {
  return (
    <div className="flex gap-2">
      {isEditing && <Button onClick={onCancelEdit}>Cancel</Button>}
      {!isEditing && (
        <Button size="icon" className="size-8" onClick={onEdit}>
          <Pencil className="size-4" />
        </Button>
      )}
      <Button
        size="icon"
        variant="destructive"
        className="size-8"
        onClick={onDelete}
      >
        <Trash2 className="size-4" />
      </Button>
    </div>
  )
}

export default TodoCardActions
