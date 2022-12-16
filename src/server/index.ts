import express, {Application, Request, Response} from 'express';

const app: Application = express();
const AuthRouter = require('./router/AuthRouter');
const UserRouter = require('./router/UserRouter');
const cors = require('cors');
const session = require('express-session');
const superSecret = 'fdsaaehrjkalfndkan';

app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true, 
  optionsSuccessStatus: 200 
}));

app.use(session({
  secret: superSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,           
    maxage: 1000 * 60 * 60 
  }
}));

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(__dirname  + '/index.html');
});

app.listen(3000);