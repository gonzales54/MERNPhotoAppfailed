import { Response, Request, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.session.token;
  if(token === undefined) {
    res.status(400).send({
      data: 'error'
    })
  }
  try {
    const decode = jwt.verify(token, 'my_secret');
    console.log(decode.user)
    res.status(200).send({user: decode.user});
  } catch(e) {
    if(e instanceof Error) {
      res.status(400).send({
        error: e
      })
    }
  }
};