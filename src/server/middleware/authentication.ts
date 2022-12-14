import { Response, Request, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  console.log(authorization);
};