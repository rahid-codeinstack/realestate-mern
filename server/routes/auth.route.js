import express from 'express';
import {verify} from "../utils/verify.js"
import { signup,signin ,google,signOutUser} from '../controller/auth.controller.js';

const router = express.Router()
router.post("/signup",signup);
router.post("/signin",signin);
router.post("/google",google);
router.post("/signout/:id",verify,signOutUser);


export default router;
