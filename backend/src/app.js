import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({
    limit: '16kb'
}));
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))
app.use(express.static('public'));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
}))

app.get('/',(req,res)=>{
    res.json({msg:'welcome to the TRST world'})
})
app.use('/user', require('./routers/userRouter.js'))


export { app };