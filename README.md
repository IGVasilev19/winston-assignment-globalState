# Todo App — GlobalState

A todo list application built with React and TypeScript, created as part of this frontend assignment.
The goal was to implement a working todo app using a provided GlobalState proof-of-concept,
extended with full CRUD functionality, multiple pages, and a responsive UI.

---

## Assignment

The assignment asked for a React todo app that:

- Is based on a provided GlobalState proof-of-concept (Context & Hooks)
- Allows a user to add, edit, check, and delete items from the list
- Stores all items in GlobalState (no persistence after refresh required)
- Contains multiple pages, one of which is the todo list
- Is mobile friendly
- Optionally makes use of a component library

---

## Approach

### Global State

The provided GlobalState implementation was translated to **TypeScript** from the start, as the
original felt outdated and TypeScript is my preferred way of working. The context exposes
`todos` and all CRUD operations (`addTodo`, `editTodo`, `deleteTodo`, `markComplete`) to any
component in the tree without prop drilling.

### Pages

The app consists of two pages:

- **Todo List (`/`)** — displays all todos with a stats bar (total, active, done) and an add
  button. Each todo is clickable and navigates to its detail page.
- **Todo Detail (`/todo/:id`)** — displays the selected todo in full. From here the user can
  edit the title and description inline, delete the todo, or toggle it between complete and
  incomplete. All changes are reflected immediately in GlobalState.

### Component Structure

Both pages are split into focused, reusable components to keep the code readable:
src/
├── components/
│ └── todos/
│ ├── AddTodoDialog.tsx # Dialog form for creating a new todo
│ ├── TodoStatsBar.tsx # Total / Active / Done stat cards
│ ├── TodoListItem.tsx # Single todo row with edit & delete actions
│ ├── TodoStatusBadge.tsx # Completed / Active status pill
│ └── TodoCardActions.tsx # Edit, cancel, delete button group
├── context/
│ └── global-context.tsx # GlobalState — todos + CRUD operations
├── pages/
│ ├── TodoListPage.tsx
│ └── TodoIdPage.tsx
└── types.ts

### UI & Styling

- **shadcn/ui** — component primitives (Button, Input, Dialog, Checkbox, Textarea)
- **Tailwind CSS** — all layout, spacing, and responsive styling
- **Lucide React** — icons
- Responsive across mobile and desktop without any additional configuration

---

## Tech Stack

- **React** + **TypeScript**
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — UI component library
- **Lucide React** — icons

---

## Getting Started

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
pnpm install
pnpm run dev
```

---

## Time Spent

**~4–5 hours**, completed in a single day of on-and-off work.

---

## Use of AI

AI (ChatGPT / Perplexity) was used during this assignment as a productivity tool — primarily for:

- Separating page code into smaller components faster
- TypeScript type error fixes
- Generating dummy data for the app
- Helping me generate this README

All logic, structure, and design decisions were made independently.
