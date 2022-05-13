const express=require('express');
const dotenv=require('dotenv');
const mongo=require('./shared');
const getRouter=require('./router/hall');
const mentor_student_Router=require('./router/mentor_student');
dotenv.config();
const app=express();

app.use(express.json()); //inbuilt middleware //convert req body into json format
mongo.connect();
mongo.connectMongoose();

app.use('/users',getRouter);
app.use('/mentor',mentor_student_Router);
app.use('/student',mentor_student_Router);

app.listen('3000');


//Middleware
// app.use("/",(req,res,next)=>{
//     //res.send("Hi,welcome to our session");
//     next();
// })

// app.use("/3",(req,res,next)=>{
//    if('hi'==='hi'){
//        res.send('correct user')
//    }
//    else{
//        res.send('wrong user')
//    }
// })

// app.use("/users",(req,res,next)=>{
//     res.send({
//         name:'yyy',
//         age:23
//     });
// })
