import { Routes, Route } from "react-router-dom"
import { TodoIdPage, TodoListPage } from "./pages"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/todo/:id" element={<TodoIdPage />} />
    </Routes>
  )
}

export default App
