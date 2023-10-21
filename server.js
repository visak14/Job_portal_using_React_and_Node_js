//imports

//const express = require('express')
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from 'swagger-jsdoc';

import "express-async-errors"
import  dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
//security packages
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize' 


//files imports
import connectDB from './config/db.js';

//routes import
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middelwares/errorMiddleware.js';
import jobsRoutes from './routes/jobsRoute.js'
import userRoutes from './routes/userRoutes.js';


//dot env config

dotenv.config()

//mongodb connection

connectDB();

//swaggger api config
const options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title:'job portal application',
            description:'Node expressjs job portal Application'
        },
        servers :[ 
            {
            url:"https://job-portal-using-react-and-node-js.onrender.com"
        }
    ]
    },
    apis:['./routes/*.js']
   


};
const spec = swaggerDoc(options)

//rest objects

const app = express()

//middlewares

app.use(helmet());
app.use(xss())
app.use(mongoSanitize())
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


   

//routes

app.use('/api/v1/test',testRoutes)
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/job',jobsRoutes)

//homeroute root
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(spec));

//validation middleware
app.use(errorMiddleware)

//port

const PORT = process.env.PORT || 8081 

//listen

app.listen(PORT, () => {
    console.log(`Node server Running In ${process.env.DEV_MODE} mode  on port no ${PORT}`.bgCyan.white)
})
