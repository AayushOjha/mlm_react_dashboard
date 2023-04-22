import { useDispatch, useSelector } from "react-redux";

import { SingleValueCard } from "../../../components/Card/SingleValueCard";
import { IStore } from "../../../services/interfaces/redux";
import { useEffect, useState } from "react";
import { setLoader } from "../../../store/slices/uiOverlaysSlice";
import { dashboard } from "../../../services/helpers/dashboardPages.api";
import { IUpHomePage } from "../../../services/interfaces/pageResponse/userPanel/home";

type Props = {};

function DashboardHome({}: Props) {
  const dispatch = useDispatch();
  const user = useSelector((store: IStore) => store.user);
  const [pageData, setPageData] = useState<IUpHomePage | undefined>();

  useEffect(() => {
    dispatch(setLoader(true));
    dashboard
      .getHomePage()
      .then((response) => {
        setPageData(response.data);
      })
      .catch
      // TODO: creat a common method to make user logout and redirect to login page, then create class or a procidure to invoke it automatically whrn api givs error likr (500)
      ()
      .finally(() => {
        dispatch(setLoader(false));
      });
  }, []);

  if (!pageData) {
    return <></>;
  }

  return (
    <div className="dashboard-home">
      <div className="card heading primary_colored">
        Hello {user.name}, Welcome Back!!
      </div>
      <div className="section-layout column-layout-2">
        <SingleValueCard
          title="Total Earning"
          value={pageData.total_earnings.toString()}
          icon="pi pi-money-bill"
        />
        <SingleValueCard
          title="Team Size"
          value={pageData.team_size.toString()}
          icon="pi pi-users"
        />
        <SingleValueCard
          title="Money Withdrawal"
          value={"sa" || pageData.money_withdrew || ""}
          icon="pi pi-sign-out"
        />
      </div>
    </div>
  );
}

export default DashboardHome;
