import axios from "axios"

const baseUrl =  process.env.NODE_ENV === "development" ? 'http://localhost:4000/api/tasks' : "https://todo-backend-67m1.onrender.com/api/tasks"
export async function getTodos() {
  console.log("env", process.env.NODE_ENV)
  const data = await axios.get(`${baseUrl}/getTodos`)
  console.log("data", data.data)
  return data.data
}
export async function postTodo(todo) {
  console.log("this is todo", todo)
  return axios.post(`${baseUrl}/todo`, todo)
}
export async function toggleTodo({todoId, isCompleted}) {
  console.log("this is patch Todo", todoId, isCompleted)
  return axios.patch(`${baseUrl}/todo/${todoId}`, {completed: isCompleted})
}