const { createHandler } = require("@bittrance/azure-function-express")

const app = require("../dist").default
// const express = require("express")
// const app = express()

// app.get("/api", (req, res) => {
//     res.status(200).send("Hi api")
// })

// app.get("/api/v1", (req, res) => {
//     res.status(200).send("Hi bye")
// })

module.exports = createHandler(app)