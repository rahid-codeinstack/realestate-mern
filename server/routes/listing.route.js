import express from 'express'
import { createList } from '../controller/Listing.controller.js';
import { verify } from '../utils/verify.js';
const router = express.Router()
router.post("/createlist",verify,createList)
export default router;
