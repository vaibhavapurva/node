import mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const postSchema =  mongoose.Schema({
    userId:Object,
    title:String,
    body:String,
});


autoIncrement.initialize(mongoose.connection)
postSchema.plugin(autoIncrement.plugin, "post")



const post = new  mongoose.model("post" , postSchema);

export default post;