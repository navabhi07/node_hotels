const express = require('express');
const app = express();
 const db=require('./db');
 

const bodyparser=require('body-parser');
app.use(bodyparser.json());



// by moving all endpoints through express router method
//import the router files
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>for person<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const personroutes=require('./routes/personroutes');
//use the router
app.use('/person',personroutes);


//import the router files for menu
const menuroutes=require('./routes/menuroutes');
//use the router
app.use('/menu',menuroutes);


app.get('/', function (req, res) {
  res.send('welcome to my hotel how can i help you?,we have list menu')
})


// for checking of server live hai ki nhi we use a function inside listen 
//to check listening
app.listen(3000,()=>
{
  console.log('listening on port 3000')
})




//server ko end krna haai aapko toh terminal mein jaker ctrl +c kr do
// for zinda krne ke liye nodemon server.js 

