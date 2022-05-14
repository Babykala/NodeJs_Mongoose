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

