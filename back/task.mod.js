const express=require('express');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Taskschema=new Schema({
    task:{
        type:String,
        required:true
    }
},{
    timestamps:true
}) ;
const Task=mongoose.model('Task',Taskschema);
module.exports=Task;