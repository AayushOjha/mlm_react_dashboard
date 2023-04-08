import { ILoginForm } from "../interfaces/loginForm";
import { ISignUpForm } from "../interfaces/signupForm";
import { fetchJSON } from "./call";

const endpoint = `${process.env.REACT_APP_API_URL}/auth`;

class User {
  signUp = (data: ISignUpForm) =>
    fetchJSON(`${endpoint}/register`, {
      method: "POST",
      data: { ...data },
    });

  signIn = (data: ILoginForm) =>
    fetchJSON(`${endpoint}/sign_in`, {
      method: "POST",
      data: { ...data },
    });
}

const user = new User();
export { user };
