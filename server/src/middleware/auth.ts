import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.sendStatus(401); // no authorization
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      if (user && typeof user !== 'string') {
        req.user = user as JwtPayload;
        return next();
      } else {
        return res.sendStatus(403);
      }
    });
    return; //ensures that the function always returns a value
};
