//import epress
const express = require("express");
const path = require("path");

//import data
const students=require("./Students");
//initialisation

const app = express();
app.get('/home',(req,res)=>{
   res.sendFile(path.join(__dirname,"Component","home.html"));

})
app.get('/contact',(req,res)=>{

 res.sendFile(path.join(__dirname,"Component","contact.html"));
})
//app.use(epress.static("Component"));
app.get("/show",(req,res)=>{
    res.send(students);
})
app.listen(5000, (err) => {
  err ? console.log(err) : console.log("server is running");
});
