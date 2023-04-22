import { useState, useEffect } from "react";
import { SingleValueCard } from "../../../components/Card/SingleValueCard";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../store/slices/uiOverlaysSlice";
import { dashboard } from "../../../services/helpers/dashboardPages.api";
import { IUpTeamPage } from "../../../services/interfaces/pageResponse/userPanel/team.interface";

function TeamSection() {
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState<IUpTeamPage | undefined>();

  useEffect(() => {
    dispatch(setLoader(true));
    dashboard
      .getTeamPage()
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
    <div className="team-section">
      <div className="section-layout column-layout-2">
        <SingleValueCard
          cardclass="p-20"
          title="Team Size"
          value={pageData.team.length.toString()}
          icon="pi pi-users"
        />
      </div>
      <div className="card mt-20">
        <DataTable
          value={pageData.team}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="name" header="Name" style={{ width: "25%" }} />
          <Column field="username" header="Username" style={{ width: "25%" }} />
          <Column field="email" header="Email" style={{ width: "25%" }} />
          <Column field="plan" header="Plan" style={{ width: "25%" }} />
        </DataTable>
      </div>
    </div>
  );
}

export { TeamSection };
