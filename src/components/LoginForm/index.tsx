import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { PasswordInput, TextInput } from "../CustomInput";
import { alphanumericRegex, passwordRegex } from "../../services/helpers/regex";
import { user } from "../../services/helpers/user.api";
import { ILoginForm } from "../../services/interfaces/loginForm";
import { setLoader } from "../../store/slices/uiOverlaysSlice";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik<ILoginForm>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(alphanumericRegex, "please enter a valid username EX: abC123")
        .required(),
      password: Yup.string()
        .matches(
          passwordRegex,
          "password can only contain alfabets and symbols and numbers EX: @abC123!"
        )
        .required(),
    }),
    onSubmit: (values) => {
      dispatch(setLoader(true));
      user
        .signIn(values)
        .then((res) => {
          Cookies.set("auth_token", res.data.token);
        })
        .then(() => {
          dispatch(setLoader(false));
          navigate("/dashboard/home");
        })
        .catch((err) => {
          // TODO: integrate proper warnings in form only.
          dispatch(setLoader(false));
          alert(err);
        });
    },
  });

  return (
    <div className="form-container form-wrapper login-form card">
      <div className="heading__lg primary_colored">Log in</div>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          name="username"
          label="Username: eg- AYUSH123"
          formik={formik}
        />
        <PasswordInput name="password" formik={formik} showFeedback={false} />
        <input
          type="submit"
          value="Log In"
          className="btn btn__full-width btn__lg"
        />
      </form>
      <div className="primary_colored forgot-password-text">
        <Link to="/auth/forgot-password">Forgot Password?</Link>
      </div>
      <div className="seperator" />
      <Link to="/auth/signup">
        <div className="btn btn__lg btn__outlined">Create Account</div>
      </Link>
    </div>
  );
}

export { LoginForm };
