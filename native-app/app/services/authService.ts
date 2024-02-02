import { AuthData } from "../auth";

const signIn = (email: string, _password: string): Promise<AuthData> => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "saikumar@gmail.com" && _password === "Qwerty") {
        resolve({
          token: JWTTokenMock,
          email: email,
          password: _password,
        });
      }
      else {
        alert("Please Enter Valid Credentials!");
      }
    }, 1000);
  });
};
  
export const authService = {
  signIn,
};
  
const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';