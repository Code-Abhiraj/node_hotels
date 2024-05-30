const mongoose=require('mongoose')

//define the mongodb connection URL
require('dotenv').config();
const mongoURl =process.env.DB_URL;

//set up MongoDB connection
mongoose.connect(mongoURl,{
useNewURLParser:true,
useUnifiedTopology:true
})

//get the default connection
//mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

//Define event listeners for database connection
db.on('connected',()=>
{
    console.log('connected database');
})
db.on('error',(err)=>
{
    console.log('database error',err);
})
db.on('disconnected',()=>
{
    console.log('disconnected database');
})

//export the database connection
module.exports=db;
