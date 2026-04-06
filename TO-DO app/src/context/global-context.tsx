import React, { useContext, createContext, useState } from "react"
import type { todoProps } from "../types/types"
import { dummyTodos } from "@/constants/data"

type GlobalContextProps = {
  todos: todoProps[]
  addTodo: (title: string, description: string) => void
  editTodo: (id: number, title: string, description: string) => void
  markComplete: (id: number) => void
  deleteTodo: (id: number) => void
}

// Create a Context for the (global) State
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [todos, setTodos] = useState<todoProps[]>(dummyTodos)

  const addTodo = (title: string, description: string): void => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title, description, completed: false },
    ])
  }

  const editTodo = (id: number, title: string, description: string): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title, description } : todo
      )
    )
  }

  const markComplete = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const value = {
    todos,
    addTodo,
    editTodo,
    markComplete,
    deleteTodo,
  }

  return (
    // Pass the current value of GlobalState, based on this components' State, down
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

// Create a shorthand Hook for using the GlobalState
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (context === undefined) {
    throw new Error("No context found")
  }

  return context
}
