import express, {Application, Request, Response} from 'express';

const app: Application = express();
const AuthRouter = require('./router/AuthRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', AuthRouter);

app.get('/', async(req: Request, res: Response) => {
  res.status(200).json({data: 'Hello World'});
});

app.listen(3000);