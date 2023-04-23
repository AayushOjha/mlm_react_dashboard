import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { SingleValueCard } from "../../../components/Card/SingleValueCard";
import { IUpWithdrawalsPage } from "../../../services/interfaces/pageResponse/userPanel/withdrawals.interface";
import { setLoader } from "../../../store/slices/uiOverlaysSlice";
import { dashboard } from "../../../services/helpers/dashboardPages.api";
import { FluidImage } from "../../../components/FluidImage";

type Props = {};

function Withdrawals({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState<IUpWithdrawalsPage | undefined>();

  useEffect(() => {
    dispatch(setLoader(true));
    dashboard
      .getWithdrawalsPage()
      .then(({ data }: { data: IUpWithdrawalsPage }) => {
        data.withdrawals = data.withdrawals.map((withdrawal) => {
          withdrawal.createdAt = moment(withdrawal.createdAt).format(
            "DD MMM YYYY"
          );
          return withdrawal;
        });
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
      <div className="team-section">
        <div className="section-layout column-layout-2">
          <SingleValueCard
            cardclass="p-20"
            title="Total Money Withdrew"
            value={pageData.total_money_withdrew.toString()}
            icon="fa fa-money-bill-transfer"
          />
          <button
            style={{ justifySelf: "flex-end" }}
            className="btn btn__lg btn__compact"
            onClick={() => {
              navigate("/dashboard/withdrawals/new");
            }}
          >
            Request Withdrawal
            <i className="fa-solid fa-arrow-right ml-10"></i>
          </button>
        </div>
        <div className="card mt-20">
          {pageData.withdrawals.length ? (
            <DataTable
              value={pageData.withdrawals}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column field="amount" header="Amount" style={{ width: "25%" }} />
              <Column field="status" header="Status" style={{ width: "25%" }} />
              {/* <Column
                field="message"
                header="Message"
                style={{ width: "25%" }}
              /> */}
              <Column
                field="createdAt"
                header="Time"
                style={{ width: "25%" }}
              />
            </DataTable>
          ) : (
            <div style={{ height: "500px" }}>
              <FluidImage
                altText="no data found"
                imageUrl="/images/noDataFound.jpg"
              />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export { Withdrawals };
