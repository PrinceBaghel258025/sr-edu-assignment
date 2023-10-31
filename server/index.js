const express = require("express")
const app = express();
const cors = require("cors")
const db = require("./db.js")
const Todo = require("./models/todo.js")
app.use(express.json())
app.use(cors())


db();


app.get("/", async (req, res) => {
  console.log("got it")
  res.send("hello")
})

app.get("/getTodos", async (req, res) => {
  const todos = await Todo.find({});
  console.log("got the request", todos)
  return res.json(todos)
})

app.post("/todo", async  (req, res) => {
  const body = req.body;
  const todo = await Todo.create({
    completed: false,
    text: body.todo
  }); 
  await todo.save()
  console.log("todo body", body)
  return res.status(200).send()
})

app.patch("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const todo = await Todo.findByIdAndUpdate(id, body, { new : true})
  console.log("id and body", id, body)
  return res.status(200).send()
})

app.listen(4000, () => {
  console.log("server is running on port 4000")
})