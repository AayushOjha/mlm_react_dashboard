import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { InputText } from "primereact/inputtext";
import { FormikContextType } from "formik";
import { ISignUpForm } from "../../services/interfaces/signupForm";
import { classNames } from "primereact/utils";
import { ErrorColor } from "../../services/constants/colors";
import { Tooltip } from "primereact/tooltip";
import { useMediaQuery } from "../../services/hooks/UseWindowSize";
import { startCase } from "lodash";
import { Password } from "primereact/password";
import "react-phone-number-input/style.css";

const TextInput = (props: {
  name: keyof ISignUpForm;
  formik: FormikContextType<ISignUpForm>;
  label?: string;
}) => {
  const { name, formik, label } = props;

  return (
    <div className="p-float-label input-wrapper">
      <InputText
        id={name}
        value={formik.values[name]}
        className={classNames(
          {
            "p-invalid": formik.errors[name] && formik.touched[name],
          },
          "p-inputtext-lg"
        )}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <label htmlFor="name">{label || startCase(name)}</label>
      <ErrorText error={formik.errors[name]} touched={formik.touched[name]} />
    </div>
  );
};

const PasswordInput = ({
  formik,
  label,
  name,
}: {
  name: keyof ISignUpForm;
  formik: FormikContextType<ISignUpForm>;
  label?: string;
}) => {
  return (
    <div className="p-float-label input-wrapper">
      <Password
        value={formik.values.password}
        onChange={(e: any) => formik.setFieldValue("password", e.target.value)}
        toggleMask
      />
      <label htmlFor="name">{label || startCase(name)}</label>
      <ErrorText error={formik.errors[name]} touched={formik.touched[name]} />
    </div>
  );
};

const ErrorText = (props: { error?: string; touched?: boolean }) => {
  const { error, touched } = props;
  const isMobile = useMediaQuery("(max-width: 576px)");
  return error && touched ? (
    <div className="input-error">
      <Tooltip target=".input-error_icon" className="tooltip" />
      <BiErrorCircle
        size={20}
        color={ErrorColor}
        className="input-error_icon"
        data-pr-tooltip={error}
        data-pr-position={isMobile ? "left" : "top"}
      />
    </div>
  ) : (
    <></>
  );
};

export { TextInput, PasswordInput };
