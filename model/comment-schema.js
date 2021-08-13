import mongoose  from "mongoose";
import autoIncrement from 'mongoose-auto-increment';





const commentSchema = mongoose.Schema({
    PostId:Number,
    userName:String,
    body:String,
})


autoIncrement.initialize(mongoose.connection)
commentSchema.plugin(autoIncrement.plugin, "comment")


const comment = new  mongoose.model("comment" , commentSchema);

export default comment;