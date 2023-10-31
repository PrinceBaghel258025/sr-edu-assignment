const router = require("express").Router()
const {addTodo, getTodos, patchTodo}  = require("../controllers/todoController")
const Todo = require("../models/todo")


router.get("/getTodos", getTodos)

router.post("/todo", addTodo)

router.patch("/todo/:id", patchTodo)

module.exports = router;