import express from 'express'
import { UpdateUser,deletUser } from '../controller/user.controller.js';
import { verify } from '../utils/verify.js';




const router = express.Router()
router.post("/updateuser/:id",verify,UpdateUser);
router.delete("/deleteuser/:Id",verify,deletUser);
export default router;
