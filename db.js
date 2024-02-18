const mongoose=require('mongoose')


//define mongodb connection url
const mongoURL= 'mongodb://localhost:27017/hotels'


//setup connection of db
mongoose.connect (mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) 

//set up the default cnnection 
//mongoose maintains a defaukt connection object representing the mongoDB connection

const db=mongoose.connection;

//define event listener

db.on('connected',()=>{
   console.log('connected to mongodb server');
});
db.on('err',(err)=>{
    console.log('mongodb connection error');
 });
 db.on('disconnected',()=>{
    console.log('mongodb disconnected');
 });

 //export the database connection
 mongoURL.exports=db;