import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { SingleValueCard } from "../../../components/Card/SingleValueCard";
import { TextInput } from "../../../components/CustomInput";
import { dashboard } from "../../../services/helpers/dashboardPages.api";
import { setLoader } from "../../../store/slices/uiOverlaysSlice";
import { useDispatch } from "react-redux";
import { IUpWithdrawalRequestPage } from "../../../services/interfaces/pageResponse/userPanel/withdrawalRequest.interface";

type Props = {};

function RequestWithdrawal({}: Props) {
  const [pageData, setPageData] = useState<
    IUpWithdrawalRequestPage | undefined
  >();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      amount: null,
    },
    onSubmit: (value) => {
      dispatch(setLoader(true));
      if (!value.amount) {
        formik.resetForm();
        // TODO: add notification
        alert("please enter amount");
        dispatch(setLoader(false));
        return;
      }
      if (value.amount % 100 !== 0) {
        formik.resetForm();
        // TODO: add notification
        alert("Amount can only be in multiple of 100");
        dispatch(setLoader(false));
        return;
      }
      dashboard
        .postWithdrawalRequest({ amount: value.amount })
        .then((response) => {
          alert("Request Sent successfully");
          navigate("/dashboard/withdrawals");
        })
        .catch((error) => {
          // todo: correct this we are getting axios fail object instead we should get backend response object,
          formik.resetForm();
          alert(error.response.data);
        })
        .finally(() => {
          dispatch(setLoader(false));
        });
    },
    validationSchema: Yup.object({
      amount: Yup.number().positive().required().nullable(),
    }),
  });

  useEffect(() => {
    dispatch(setLoader(true));
    dashboard
      .getWithdrawalRequest()
      .then(({ data }: { data: IUpWithdrawalRequestPage }) => {
        setPageData(data);
      })
      .catch
      // TODO: creat a common method to make user logout and redirect to login page, then create class or a procidure to invoke it automatically whrn api givs error likr (500)
      ()
      .finally(() => {
        dispatch(setLoader(false));
      });
  }, []);

  if (pageData) {
    return (
      <div>
        <div className="section-layout column-layout-2">
          <SingleValueCard
            cardclass="p-20"
            title="Available Balance"
            value={pageData.balance.toString()}
            icon="fa fa-money-bill-transfer"
          />
        </div>
        <div className="mt-20 p-20 card form-wrapper">
          <span className="heading primary_colored bold_text">
            Send Withdraw Request
          </span>
          <form>
            <div className="section-layout column-layout-3">
              <TextInput name="amount" label="Enter Amount" formik={formik} />
            </div>
            <div
              onClick={() => formik.handleSubmit()}
              className="btn btn__full-width btn__outlined btn__compact"
            >
              Submit
              <i className="fa-solid fa-check ml-5"></i>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export { RequestWithdrawal };
