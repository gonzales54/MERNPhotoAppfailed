import { Response, Request, NextFunction } from 'express';

const jwt = require('jsonwebtoken');

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
}