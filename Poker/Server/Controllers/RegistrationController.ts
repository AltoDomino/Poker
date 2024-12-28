import { Request, Response, NextFunction } from 'express';
import RegistrationService from '../Services/RegistrationService';

const getRegistrationController = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const rawData = req.body; 
      console.log(rawData,"controller")
    const { user, password } = rawData;
    const response = await RegistrationService.getRegistrationService({ user, password });
    if (response.message === "notExist"){
      res.send(201)
    }
    }catch {
       res.send(403)
  }
};

export default { getRegistrationController };
