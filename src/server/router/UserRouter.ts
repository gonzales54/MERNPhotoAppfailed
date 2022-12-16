import express, {Application, Request, Response} from 'express'
import { verifyToken } from '../middleware/Authentication';

const app: Application = require('express');
const router = express.Router();

router.use(verifyToken);

router.get('/');

module.exports = router;