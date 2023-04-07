import { ISignUpForm } from "../interfaces/signupForm";
import { fetchJSON } from "./call";

const endpoint = `${process.env.REACT_APP_API_URL}/auth/register`;

class User {
  signUp = (data: ISignUpForm) =>
    fetchJSON(endpoint, {
      method: "POST",
      data: {
        ...data,
      },
    });
}

const user = new User();
export { user };
