import express, {Application, Request, Response} from 'express'

const app: Application = require('express');
const router = express.Router();

router.get('/register', async(req: Request, res: Response) => {
  res.status(200).send({
    data: 'Hello World'
  });
});

router.post('/login', async(req: Request, res: Response) => {
  console.log(req.body)
});


module.exports = router;