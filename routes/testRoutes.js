import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middelwares/authMiddleware.js";

//rest object
const router = express.Router()

//router
router.post('/test-post',  testPostController)
 
//export

export default router