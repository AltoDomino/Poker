
export interface dataReg {
  user: string
  password : string
}

export let registrations :dataReg[]= []
export let logged  :boolean= false

const getRegistrationService = async(decodedData:dataReg) => {
  const exist = registrations.some(
    (registration) => registration.user === decodedData.user
  );
   logged = false
  if (!exist) {
    registrations.push(decodedData);
   return {message: 'notExist' };
  }
  };
  
  export default {getRegistrationService}