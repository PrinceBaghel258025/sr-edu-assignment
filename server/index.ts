const express = require("express")

const app = express();

app.get("/", async (req: any, res: any) => {
  console.log("got it")
  res.send("hello")
})

app.listen(4000, () => {
  console.log("server is running on port 4000")
})