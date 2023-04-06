import { useFormik } from "formik";
import * as Yup from "yup";
import { PasswordInput, TextInput } from "../CustomInput";
import { ISignUpForm } from "../../services/interfaces/signupForm";
import { Password } from "primereact/password";

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
        .max(40, "Must be 40 characters or less")
        .required("Required"),
      username: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
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
