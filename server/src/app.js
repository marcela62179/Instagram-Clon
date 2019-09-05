require('dotenv').config()
import express from 'express';
import Mongoose from 'mongoose';
import morgan from 'morgan'
import { json, urlencoded } from 'body-parser';
import AuthToken from './middlewares/AuthToken';
import cors from 'cors';

//  Routes
import Login from './routes/Login.routes';
import Image from './routes/Image.routes';
import User from './routes/User.routes';
import Upload from './routes/Upload.routes';

const app = express();

Mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const whitelist = ['http://localhost:3000', '*', 'http://190.211.3.200:3000']

const corsOptions = {
    origin: whitelist
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(json());
app.use(urlencoded({ extended: false }));

// Rutas
app.use(Login)
app.use(AuthToken, User)
app.use(AuthToken, Image)
app.use(AuthToken, Upload)

app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log('Servidor api en el puerto 5000 !')
})


