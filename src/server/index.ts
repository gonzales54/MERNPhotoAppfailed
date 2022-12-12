import express, {Application, Request, Response} from 'express'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response) => {
  res.status(200).json({data: 'Hello World'});
});5

app.listen(3000);