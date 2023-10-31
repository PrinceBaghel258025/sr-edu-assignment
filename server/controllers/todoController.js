const Todo = require("../models/todo")

const addTodo = async  (req, res) => {
  const body = req.body;
  const todo = await Todo.create({
    completed: false,
    text: body.todo
  }); 
  await todo.save()
  console.log("todo body", body)
  return res.status(200).send()
}

const patchTodo = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const todo = await Todo.findByIdAndUpdate(id, body, { new : true})
  console.log("id and body", id, body)
  return res.status(200).send()
}


const getTodos = async (req, res) => {
  const todos = await Todo.find({});
  return res.json(todos)
}
module.exports = {
  addTodo,
  getTodos,
  patchTodo
}