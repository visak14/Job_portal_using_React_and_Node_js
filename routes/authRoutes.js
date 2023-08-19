import express from 'express'
import { loginController, registerController } from '../controllers/authController.js'
import rateLimit from 'express-rate-limit';

//ip limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

//router object

const router = express.Router()

//routes

/**
 * @swagger
 * components:
 *  schemas:
 *  User:
 *    type: object
 *    required:
 *      - name
 *      - lastName
 *      - email
 *      - password
 *      - location
 *    properties:
 *      id:
 *         type: string
 *         description: The Auto-generated id of user collection
 *      name:
 *         type: string
 *         description: User name
 *      lastName:
 *         type: string
 *         description: User Last Name
 *      email:
 *         type: string
 *         description: user email address
 *      password:
 *           type: string
 *           description: user password should be greater then 6 character
 *      location:
 *           type: string
 *           description: user location city or country
 *    example:
 *        id: vis
 *        name: test
 *        lastName: done
 *        email: vis@123
 *        location : mumbai
 */

/**
 * @swagger
 * tags:
 *   name: auth
 *   description: authentication apis
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: register new user
 *     tags: [Auth]
 *     requestBody:
 *     required : true
 *     content:
 *       application/json:
 *         schema:
 *           $ref:'#/components/schemas/User'
 *      responses:
 *        200:
 *          description: 'user created successfully'
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        responsse: 
 * 
 *          500:
             descrption: internal server error
 */      


//Register ||post
router.post('/register',limiter,registerController)

//LOGIN || POST

router.post('/login',limiter, loginController)

//export 
export default router