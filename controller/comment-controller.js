import comment from "../model/comment-schema.js";

export const addUserComment=  async(req , res)=>{
    console.log(req.body);
    const {PostId  ,userName , body} = req.body;
    try{
        const Comment = new comment({PostId ,userName , body});
        
        const a = await Comment.save();
    }catch(err){
        console.log(err);
    }

}

export const getCommentId = async (req, res) => {
    try {
        const User = await comment.find();
        res.json(User);
    } catch (error) {
        response.error({ message: error.message });
    }
}