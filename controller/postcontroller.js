import { response } from "express";
import post from '../model/post-schema.js';


export const getPostUser = async (req, res) => {
    console.log("getPostUser");
    try {
        let User = await post.find();
        console.log(User);
        res.json(User);
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const postUser = async (req, res) => {
    console.log(req.body);
    const { userId, title, body } = req.body;
    try {
        const Post = new post({ userId, title, body });
        const a = await Post.save();
        console.log(a)

        return res.json({ message: " user post done" })
    } catch (err) {
        console.log(err)
    }
}




export const getPostById = async (req, res) => {
    console.log("get post id ");
    const id = req.params.id;
    try {
        const User = await post.findById(id);
        res.json(User);
    } catch (error) {
        response.error({ message: error.message });
    }
}



export const updatePost = async (req, res) => {
    const Post = req.body;
    console.log("up[date id");
    const editpost = post(Post);
    try {
        await post.updateOne({ _id: req.params.id }, editpost)
        res.json(editpost);
    } catch (error) {
        response.json({ message: error.message });
    }
}


