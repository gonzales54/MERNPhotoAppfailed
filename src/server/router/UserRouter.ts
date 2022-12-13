import express, {Application, Request, Response} from 'express'
import { getLoginUser } from '../models/User';

const app: Application = require('express');
const router = express.Router();

router.get('/', async(req: Request, res: Response) => {
  res.status(200).send({
    data: await getLoginUser()
  });
});

module.exports = router;