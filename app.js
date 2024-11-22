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

// Response Methods:

// ? SendStatus:
// app.get('/', (req, res) => res.sendStatus(404))
// ? Status:
// app.get('/', (req, res) => res.status(200).send({ message: 'OK' }))
// app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' }))
// ? JSON (.send() method already does this converting.)
// app.get('/', (req, res) => res.json([{ key: 'value' }]))
// ? Download File (Download at browser):
// app.get('/download', (req, res) => res.download('./app.js', 'changedName.js'))
// ? SendFile Content:
// console.log( __dirname )
// app.get('/file', (req, res) => res.sendFile(__dirname + '/app.js')) // FilePath must be realPath
// ? Redirect:
// app.get('/google', (req, res) => res.redirect(301, 'https://www.google.com')) // 301 or 302
// app.get('/redirect', (req, res) => res.redirect(302, '/thisPath'))







// app.listen(PORT, () => {console.log(`running: http://127.0.0.1:8000`)})
app.listen(PORT, () => {
  console.log(`Running: http://${HOST}:${PORT}`);
});
