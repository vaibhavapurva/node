import express from 'express';
import { getUsers, signin, addUser, getUserById, editUser, deleteUser } from "../controller/user-controller.js";
import { postUser, getPostUser, getPostById, updatePost } from "../controller/postcontroller.js";
import { addUserComment, getCommentId } from '../controller/comment-controller.js';
import { addTask } from '../controller/taskcontroller.js';
const route = express.Router();
console.log("aapppp")

route.get('/', getUsers);
route.post('/add', addUser);
route.post('/signin', signin);

route.put('/:id', editUser);
route.delete('/:id', deleteUser);
route.post('/addPost', postUser);
route.get('/getPost', getPostUser);

route.post('/addComment', addUserComment);
route.get('/getComment/:postId', getCommentId);
route.get('/:id', getUserById);
route.get('/getpostid/:id', getPostById);
route.put('/updatepost/:id', updatePost);
route.post('/addtask',addTask);


export default route;