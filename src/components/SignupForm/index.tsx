import { useFormik } from "formik";
import * as Yup from "yup";
import { PasswordInput, TextInput } from "../CustomInput";
import { ISignUpForm } from "../../services/interfaces/signupForm";
import { alphanumericRegex, passwordRegex } from "../../services/helpers/regex";

// TODO: change phone number input, take phone number with country code.

type Props = {};

function SignupForm({}: Props) {
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
        .oneOf([Yup.ref("password"), loda], "Passwords don't match")
        .required("Required"),
      referral: Yup.string().matches(
        alphanumericRegex,
        "please enter a valid reffral code"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
    </div>
  );
}

export { SignupForm };
