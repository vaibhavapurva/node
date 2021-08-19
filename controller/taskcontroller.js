import { response} from "express";
import task from  '../model/task-schema.js';

export const addTask = async(req , res)=>{
    console.log("task");
    console.log(req.body);
    const {title , date , startTime , endTime , user}= req.body;
    try{
        console.log("data")
        const Task = new task({title, date , startTime , endTime , user});
        console.log("task " , Task);
        const a = await Task.save();
        console.log(a);
    }catch(err){
        console.log("eeee");
        console.log(err);
    }
}