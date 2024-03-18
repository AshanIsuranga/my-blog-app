import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
//create a controller file to put the operation and call the module 
export default router;