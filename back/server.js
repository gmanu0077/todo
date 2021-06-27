const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const path=require('path');

const app=express(); 
app.use(cors());
app.use(express.json());

const uri='mongodb+srv://manu:test1234@cluster0.m8dup.mongodb.net/Task?retryWrites=true&w=majority';
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true })
 .catch((err)=>{console.log(err)})
 .then(console.log('connected'));
 
const task=require('./task');
app.use('/api/tasks',task);

app.use(express.static(path.join(__dirname,'../build')))
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'../build','index.html'))
})
app.listen(5000,(res,req)=>{
    console.log('listening...')
})