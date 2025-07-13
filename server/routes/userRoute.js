import express from 'express';
import { register } from '../controllers/userController.js';
import { login } from '../controllers/userController.js';
import { isAuth } from '../controllers/userController.js';
import { logout } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/is-auth',authUser, isAuth);
userRouter.get('/logout',authUser, logout);

export default userRouter;