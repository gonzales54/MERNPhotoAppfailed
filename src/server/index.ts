import express, {Application, Request, Response} from 'express';

const app: Application = express();
const AuthRouter = require('./router/AuthRouter');
const cors = require('cors');

app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));
app.use('/auth', AuthRouter);

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true, 
  optionsSuccessStatus: 200 
}));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(__dirname  + '/index.html')
});


app.listen(3000);