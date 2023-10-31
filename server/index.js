const express = require("express")
const app = express();
const cors = require("cors")
const db = require("./db.js")
const taskRouter = require("./routes/taskRouter.js")

app.use(express.json())
app.use(cors())


db();


app.use("/api/tasks", taskRouter)
app.get("/", async (req, res) => {
  console.log("got it")
  res.send("hello")
})



app.listen(4000, () => {
  console.log("server is running on port 4000")
})