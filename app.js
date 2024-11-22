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
// app.route("/route")
// .get((req,res) => {res.send({message:"get"})})
// .post((req,res) => {res.send({message:"post"})})
// .put((req,res) => {res.send({message:"put"})})
// .delete((req,res) => {res.send({message:"delete"})})

//? URL (path) options:
// app.get("/", (req,res) => res.send("/ = root(home)"))
// app.get("/path", (req,res) => res.send("/path = path"))

//? express -url support jockerChars:
// app.get("/abc(xy)?123", (req,res) => res.send("/abc(xy)123")) // \ ? means xy, whether it happens or not
// app.get("/abc(x)+123", (req,res) => res.send("/abc(x)123")) // at least there must be one
// app.get("/abc*123", (req,res) => res.send("/star means it does not matter")) 
// app.get("/abc*123", (req,res) => res.send("/star means it does not matter")) 

//? express -url support Regular Expression:
// app.get(/xyz/, (req,res) => res.send("/if it contains xyz it works/")) 
// app.get(/xyz$/, (req,res) => res.send("/ends with xyz/")) 
// app.get(/^\/xyz/, (req,res) => res.send("/starts with xyz/")) 


//? URL Parameters (req.params)

// app.get("/user/:userId/profile", (req, res) => {
//   console.log(req.params)
//   res.send({
//     userId:req.params.userId
//   });
// });

// app.get("/user/:userId/profile/update/:updating", (req, res) => {
//   console.log(req.params)
//   res.send({
//     userId:req.params.userId,
//     updating: req.params.updating
//   });
// });

// /users/(ANY)/profile/update/(ANY)'
// app.get('/user/:userId/profile/update/:userData', (req, res) => {
//       res.send({
//         userId: req.params.userId,
//         updating: req.params.userData,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrl: req.originalUrl,
//             url: req.url
//         }
//     })
// })

// userId -> only numbers
// app.get('/user/:userId([0-9])/', (req, res) => {
//   res.send({
//     userId: req.params.userId
//     })
// })

// : 
app.get('/user/:userId([0-9])/', (req, res) => {
  res.send({
    userId: req.params.userId
    })
})






// app.listen(PORT, () => {console.log(`running: http://127.0.0.1:8000`)})
app.listen(PORT, () => {
  console.log(`Running: http://${HOST}:${PORT}`);
});
