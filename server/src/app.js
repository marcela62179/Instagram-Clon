require('dotenv').config()
import express from 'express';
import Mongoose from 'mongoose';
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser';
import { authClientToken } from './helpers/authGuard';
import cors from 'cors';

//  Routes
import Login from './router/Login.routes';
import Image from './router/Image.routes';
import User from './router/User.routes';

let app = express();

Mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

var whitelist = ['http://localhost:3000', 'http://190.211.4.148:3000']

var corsOptions = {
    origin: whitelist
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(json());
app.use(urlencoded({ extended: false }));

// Rutas
app.use(Login)
app.use(authClientToken, User)
app.use(authClientToken, Image)

app.listen(5000, () => {
    console.log('Servidor api en el puerto 5000 !')
})


