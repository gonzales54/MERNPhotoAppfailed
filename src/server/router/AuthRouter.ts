import express, {Application, Request, Response} from 'express'
import { getUser } from '../models/User';

const app: Application = require('express');
const router = express.Router();

router.get('/register', async(req: Request, res: Response) => {
  res.status(200).send({
    data: 'Hello World'
  });
});

router.post('/login', async(req: Request, res: Response) => {
  const { userName, passWord } = req.body.params;
  const user = await getUser(userName);
  const token = user?.getSignedJwtToken();

  console.log(token)
  
  res.status(200).send({
    data: token
  });
});


module.exports = router;