import express from 'express'
import { UpdateUser } from '../controller/user.controller.js';
import { verify } from '../utils/verify.js';




const router = express.Router()
router.post("/updateuser/:id",verify,UpdateUser)
export default router;
