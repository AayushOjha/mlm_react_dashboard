import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import moment from "moment";

import { SingleValueCard } from "../../../components/Card/SingleValueCard";
import { IUpEarningsPage } from "../../../services/interfaces/pageResponse/userPanel/earnings.interface";
import { setLoader } from "../../../store/slices/uiOverlaysSlice";
import { dashboard } from "../../../services/helpers/dashboardPages.api";

type Props = {};

function Earnings({}: Props) {
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState<IUpEarningsPage | undefined>();

  useEffect(() => {
    dispatch(setLoader(true));
    dashboard
      .getEarningsPage()
      .then(({ data }: { data: IUpEarningsPage }) => {
        data.transactions = data.transactions.map((transaction) => {
          transaction.createdAt = moment(transaction.createdAt).format(
            "DD MMM YYYY"
          );
          return transaction;
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
            title="Total Earnings"
            value={pageData.total_earnings.toString()}
            icon="fa fa-money-bill-wave"
          />
        </div>
        <div className="card mt-20">
          <DataTable
            value={pageData.transactions}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="amount" header="Amount" style={{ width: "25%" }} />
            <Column field="type" header="Type" style={{ width: "25%" }} />
            <Column field="message" header="Message" style={{ width: "25%" }} />
            <Column field="createdAt" header="Time" style={{ width: "25%" }} />
          </DataTable>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export { Earnings };
