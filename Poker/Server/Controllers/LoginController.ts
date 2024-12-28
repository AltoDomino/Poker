import {  Request, Response,NextFunction, raw } from "express";
import LoginService from "../Services/LoginService";

const getLoginController = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const rawData = req.body
    const { user, password } = rawData
    const response = await LoginService.LoginService({ user, password });
    if(response.message === "exist"){
         res.send(201);
    }
    }catch{
    res.send(422)
  }
};

export default { getLoginController };
