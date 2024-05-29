//var add=(a,b)=>a+b;
//var res=add(2,3);
//console.log(res);
//(function()
//{
//    console.log("hello");
//})();

//function callback()
//{
//    console.log("multiplied");

//}
//var multi=(a,b,callback)=>{
//   console.log(a*b);
//   callback();
//}
//multi(4,5,callback);
//multi(8,9,()=>{console.log("multi")});

//var fs=require('fs');
//var os=require('os');

//var user=os.userInfo();
//console.log(user);
//console.log(user.username);

//fs.appendFile('greeting.txt','Hi '+user.username+' !',()=>{console.log('file created')});

//console.log(fs);

//const notes=require('./notes');
//console.log('notes page loaded');

//console.log(notes.age);
//var res=notes.addnum(2,3);
//console.log(res);

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error:', err));

app.get('/', function (req, res) {
  res.send('hello world');
});

const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
