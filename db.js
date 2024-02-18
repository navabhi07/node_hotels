const mongoose=require('mongoose')
require('dotenv').config();

//define mongodb connection url
//const mongoURL=process.env.MONGODB_URL_LOCAL; // it is local database(mongodb compass)

//this is global database connection mongodbatlas cluster(MONGODB ATLAS CLUSSTER)
const mongoURL=process.env.MONGODB_URL; //it is connected to online cluster setup through mongodb atlas

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