import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import LoginRouter from "../Server/Routes/LoginRouter.ts"
import RegistrationRouter from "../Server/Routes/RegistrationRouter.ts"
import { notFoundHandler, serverErrorHandler } from "../Server/middleware/errorHandler.ts";

const app = express();

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(` url: ${req.url} `)
  next();
};

app.use(cors());

app.use(requestLogger);
app.use(express.json());

app.use("/api/registration", RegistrationRouter);
app.use("/api/login", LoginRouter);

app.use(serverErrorHandler);
app.use(notFoundHandler);

app.listen(3000, () => {
  console.log("Server is successfully running on port 3000");
});

