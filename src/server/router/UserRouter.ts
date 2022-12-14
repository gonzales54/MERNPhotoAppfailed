import express, {Application, Request, Response} from 'express'
import { protect } from '../middleware/authentication';

const app: Application = require('express');
const router = express.Router();

router.use(protect);

router.get('/', async(req: Request, res: Response) => {
  res.status(200).send({
    data: 'data'// await getLoginUser(req.body.params.email, req.body.params.password)
  });
});

module.exports = router;