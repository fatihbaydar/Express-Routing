"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */

//? HTTP METHODS & URLs:

const express = require("express");
const app = express();

require("dotenv").config();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//   // res.send("Welcome to express")
//   res.send({
//     message: "Welcome to express",
//   });
// });


// app.post("/", (req, res) => {
//   res.send({
//     message: "post",
//   });
// });

// app.put("/", (req, res) => {
//     res.send({
//       message: "put",
//     });
//   });

// app.delete("/", (req, res) => {
//     res.send({
//       message: "delete",
//     });
//   });

// all methods: all()
// app.all("/", (req, res) => {
//     res.send({
//       message: "all",
//     });
//   });


//? app.route()
app.route("/route")
.get((req,res) => {res.send({message:"get"})})
.post((req,res) => {res.send({message:"post"})})
.put((req,res) => {res.send({message:"put"})})
.delete((req,res) => {res.send({message:"delete"})})


// app.listen(PORT, () => {console.log(`running: http://127.0.0.1:8000`)})
app.listen(PORT, () => {
  console.log(`Running: http://${HOST}:${PORT}`);
});
