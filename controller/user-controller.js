import { response } from "express";
// import task from '../model/user-schema.js';
import user from '../model/user-schema.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
    try {
        let User = await user.find();
        console.log("hello");
        res.json(User)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// export const addUser = async(req , res)=>{
//  const User = req.body;
//  const newUser = user(User);
//  try{
//      await newUser.save();
//      console.log("hello");
//      res.json(newUser)
//  }catch(error){
//      res.json({message : error.message})
//  }
// }

export const addUser = async (req, res) => {
    const { name, email, city, field, password } = req.body;
    if (!name || !email || !city || !field || !password) {
        console.log("all compl");
        return res.status(422).json({ error: " plx filled all" });
    }
    // const newUser = user(User);
    try {
        const userExist = await user.findOne({ email: email });
        if (userExist) {
            console.log(" error aa gai email wali")
            return res.status(422).json({ error: "email already Exist" });
        }
        const User = new user({ name, email, city, field, password });
        await User.save();
        console.log("hello");
        // res.json(newUser)
    } catch (error) {
        console.log(error);
        res.json({ message: error.message })
    }
}

export const signin = async (req, res) => {
    //    console.log(req.body);
    //    res.json({message:"asesome"})
    console.log("1");
    try {
        console.log("2");
        const { email, password } = req.body;
        if (!email || !password) {

            return res.status(400).json({ error: "plz FIllled the data" })
        }
        console.log("4");
        const userLogin = await user.findOne({ email: email });

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            console.log(token);
            console.log(token);

            // res.cookie("jwtoken", token ,{
            //     expires:new Date(Date.now()+3600),
            //     httpOnly:true
            // });
            if (!isMatch) {

                res.status(400).json({ message: "Invlid Credientials pass" });
            } else {
                console.log("8 true");
                res.json({ message: "user SIngin Successfully", token: token, id: userLogin._id, name: userLogin.name });
            }
        } else {
            console.log("9")
            res.status(400).json({ error: "Invalid Credientials" })
        }
    } catch (err) {
        console.log("10")
        console.log(err);
    }
}


export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const User = await user.findById(id);
        res.json(User);
    } catch (error) {
        response.error({ message: error.message });
    }
}


export const editUser = async (req, res) => {
    const User = req.body;

    const editUser = user(User);
    try {
        await user.updateOne({ _id: req.params.id }, editUser)
        res.json(editUser);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await user.deleteOne({ _id: req.params.id });
        res.json("user delete");

    } catch (error) {
        res.json({ message: error.message });

    }
}