import { response } from "express";
// import task from '../model/user-schema.js';
import user from '../model/user-schema.js';

export  const getUsers  =async (req , res)=>{
    console.log("hellllllllllll");
    try{
       let User = await user.find();
        console.log("hello");
        res.json(User)
    }catch(error){
        res.json({message : error.message})
    }
}

export const addUser = async(req , res)=>{
 const User = req.body;
 const newUser = user(User);
 try{
     await newUser.save();
     console.log("hello");
     res.json(newUser)
 }catch(error){
     res.json({message : error.message})
 }
}


export const getUserById= async(req, res)=>{
    console.log("user ki id wala data de do");
    const id = req.params.id;
    try{
    const User = await user.findById(id);
    res.json(User);
    }catch(error){
        response.error({message:error.message});
    }
}


export const editUser =async(req , res)=>{
    console.log("hello update kr do")
    const User = req.body;

    const editUser = user(User);
    try{
        await user.updateOne({_id:req.params.id} ,editUser)
        res.json(editUser);
    }catch(error){
        response.json({message: error.message});
    }
}

export const deleteUser=async(req , res)=>{
    try{
        await user.deleteOne({_id:req.params.id});
        res.json("user delete");

    }catch(error){
        res.json({message:error.message});

    }
}