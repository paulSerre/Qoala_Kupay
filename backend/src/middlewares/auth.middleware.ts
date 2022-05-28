import { NextFunction, Request, Response, Express } from "express";

const publicRoutes: Array<string> = ["/signin", "/signup", "/checklogin"]

const authMiddleware = () => (req: Request, res: Response, next: NextFunction) => {
    if(publicRoutes.includes(req.url)) {
      console.log("Route is public.")
      return next();
    }

    if (req.user) {
      //@ts-ignore
      console.log(`User id ${req.user.userId} is authentified.`)
      return next()
    }

    console.log(`Trying to access a private route.`)
    res.status(401).send({message: "User not logged"});
}

export { authMiddleware };