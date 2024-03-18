import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
//default import allows to change the name(here we change the original name of router to userRoutes)
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose
.connect(process.env.MONGO).then(() => {
    console.log('Mongodb is connected');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

//json use to pass data


app.listen(3000, () => {
    console.log('server is running on the port 3000');
});

app.use('/api/user', userRoutes);
//userRoutes imports the /test route to the /api/user
//so the mordified route is now /api/user/test
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});