import express, {Application, Request, Response} from 'express'

const app: Application = require('express');
const router = express.Router();

router.get('/register', async(req: Request, res: Response) => {
  res.status(200).send({
    data: 'Hello World'
  });
});

router.get('/login', async(req: express.Request, res: express.Response) => {
  res.status(200).send({
    data: 'Hello World'
  });
});


module.exports = router;