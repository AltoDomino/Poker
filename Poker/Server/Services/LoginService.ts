
import { registrations } from "./RegistrationService";
import { dataReg } from "./RegistrationService";

const LoginService = async(user:dataReg) => {
     const checkData = registrations.some(registration => 
      registration.user === user.user && 
      registration.password === user.password
  )
  if(checkData){
       return { message: "exist" };
  }
  };
  
  export default {LoginService}