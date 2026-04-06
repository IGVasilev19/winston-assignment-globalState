export type todoProps = {
  id: number
  title: string
  description: string
  completed: boolean
}

export interface TodoListItemProps {
  todo: todoProps
}

export interface TodoCardActionsProps {
  isEditing: boolean
  onEdit: () => void
  onCancelEdit: () => void
  onDelete: () => void
}

export interface TodoStatusBadgeProps {
  completed: boolean
}
