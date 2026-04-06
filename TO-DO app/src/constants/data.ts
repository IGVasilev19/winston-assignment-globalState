import type { todoProps } from "@/types/types"

const now = Date.now()
const day = 1000 * 60 * 60 * 24

export const dummyTodos: todoProps[] = [
  {
    id: now - day * 9,
    title: "Groceries",
    description: "Buy groceries from Albert Heijn",
    completed: false,
  },
  {
    id: now - day * 8,
    title: "Statistics",
    description: "Finish the statistics assignment",
    completed: true,
  },
  {
    id: now - day * 7,
    title: "Code Review",
    description: "Review pull request for the fitness platform",
    completed: false,
  },
  {
    id: now - day * 6,
    title: "KVK Registration",
    description: "Set up KVK registration for freelance business",
    completed: false,
  },
  {
    id: now - day * 5,
    title: "Unit Tests",
    description: "Write unit tests for the binary search tree",
    completed: true,
  },
  {
    id: now - day * 4,
    title: "Prisma Schema",
    description: "Update Prisma schema with new relations",
    completed: false,
  },
  {
    id: now - day * 3,
    title: "Presentation",
    description: "Prepare slides for the algorithms presentation",
    completed: true,
  },
  {
    id: now - day * 2,
    title: "Bug Fix",
    description: "Fix Nest.js authentication middleware bug",
    completed: false,
  },
  {
    id: now - day * 1,
    title: "Meal Prep",
    description: "Meal prep for the week",
    completed: true,
  },
  {
    id: now,
    title: "Monorepo Push",
    description: "Push latest changes to the monorepo",
    completed: false,
  },
]
