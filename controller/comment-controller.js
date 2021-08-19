import comment from "../model/comment-schema.js";

export const addUserComment=  async(req , res)=>{
    console.log(req.body);
    console.log("addCommet");
    const {PostId  ,userName , body} = req.body;
    try{
        console.log("1");
        const Comment = new comment({PostId ,userName , body});
        console.log("2")
        const a = await Comment.save();
        console.log(a);
    }catch(err){
        console.log(err);
    }

}

export const getCommentId = async (req, res) => {
    const PostId = req.params.postId;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    console.log("commentId",PostId)
    try {
        const User = await comment.findById(PostId);
        console.log(User)
        res.json(User);
    } catch (error) {
        response.error({ message: error.message });
    }
}