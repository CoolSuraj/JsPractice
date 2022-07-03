/* 
Documentation https://expressjs.com/en/4x/api.html
in command line go to any empty folder using cd
write 1. npm init -y
then 2. npm i express --save

To run 3. node index.js
we can also use nodemon index.js //for that use sudo npm install -g --force nodemon to install first

*/

const express = require('express');
const app = express();

app.get('/',function (req,res) {
    res.send('Hello World');
})

app.post('/',(req,res)=>{
    res.send('Hello World from post method'); //use postman tool with post method
})

app.post('/employee',(req,res)=>{
    res.send('hello employee');  //use postman tool with post method
})

app.get('/employee',(req,res)=>{   /* this is get method */
    res.send('<b>hello employee</b>');  
})

app.get('/employee/:empid',(req,res)=>{
    if (req.params.empid ==400) {
        res.status(400).json({
            'employeeValid':false  /* will send 404 for 400 employee id */
        })
    } else {
        res.send('<i>hello employee</i> '+req.params.empid); 
    }
      //
})




app.listen(3000);