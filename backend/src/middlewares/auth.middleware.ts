import { NextFunction, Request, Response } from "express";

const publicRoutes: Array<string> = []

const authenticationMiddleware = () => (req: Request, res: Response, next: NextFunction) => {
    if(publicRoutes.includes(req.baseUrl)) {
      next();
    }

    if (req.isAuthenticated()) {
      return next()
    }
    res.status(501).redirect('/login');
}