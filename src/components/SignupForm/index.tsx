import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { PasswordInput, TextInput } from "../CustomInput";
import { ISignUpForm } from "../../services/interfaces/signupForm";
import { alphanumericRegex, passwordRegex } from "../../services/helpers/regex";
import { user } from "../../services/helpers/user.api";

// TODO: change phone number input, take phone number with country code.

type Props = {};

function SignupForm({}: Props) {
  const navigate = useNavigate();
  const formik = useFormik<ISignUpForm>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      rePassword: "",
      referral: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .max(125)
        .required()
        .trim("remove whitespace")
        .strict(),
      email: Yup.string().email().required(),
      phone: Yup.number().max(9999999999).min(999999999).required(),
      username: Yup.string()
        .matches(
          alphanumericRegex,
          "username can only contain alfabets and numbers EX: abC123 | min: 3 & max: 15 characters"
        )
        .required(),
      password: Yup.string()
        .matches(
          passwordRegex,
          "password can only contain alfabets and symbols and numbers EX: @abC123!"
        )
        .required(),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords don't match")
        .required("Required"),
      referral: Yup.string().matches(
        alphanumericRegex,
        "please enter a valid reffral code"
      ),
    }),
    onSubmit: (values) => {
      user
        .signUp(values)
        .then((res) => {
          navigate("/dashboard/home");
        })
        .catch((err) => {
          // TODO: integrate proper warnings in form only.
          alert(err);
        });
    },
  });

  return (
    <div className="form-container signup-form card">
      <div className="heading__lg primary_colored">Sign up</div>
      <form onSubmit={formik.handleSubmit}>
        <TextInput name="name" formik={formik} />
        <TextInput name="email" formik={formik} />
        <TextInput name="phone" formik={formik} />
        <TextInput
          name="username"
          label="Username: eg- AYUSH123"
          formik={formik}
        />
        <PasswordInput name="password" formik={formik} />
        <PasswordInput name="rePassword" formik={formik} />
        <TextInput name="referral" formik={formik} />
        <input
          type="submit"
          value="Sign Up"
          className="btn btn__full-width btn__lg"
        />
      </form>
      <div className="seperator"></div>
      <div className="log-in-text">
        <span>{`Already have an account? `}</span>
        <Link to="/auth/login">
          <b className="primary_colored">Log in</b>
        </Link>
      </div>
    </div>
  );
}

export { SignupForm };
