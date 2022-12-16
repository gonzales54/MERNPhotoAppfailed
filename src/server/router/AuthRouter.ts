import express, {Application, Request, Response} from 'express'
import { getUser } from '../models/User';

const app: Application = require('express');
const router = express.Router();

declare module 'express-session' {
  interface SessionData {
    token: string | null
  }
}

router.get('/register', async(req: Request, res: Response): Promise<void> => {
  res.status(200).send({
    data: 'Hello World'
  });
});

router.post('/login', async(req: Request, res: Response): Promise<void> => {
  const { userName, passWord } = req.body.params;
  const user = await getUser(userName, passWord);
  const token = user?.getSignedJwtToken(user);

  req.session.token = token;

  res.status(200).send({
    user: user,
    data: 'Login Successfully'
  });
});

router.get('/logout', async(req: Request, res: Response): Promise<void> => {
  req.session.token = null;
  res.status(200).send({
    data: 'Logout Successfully'
  });
})


module.exports = router;