import { SingleValueCard } from "../../../components/Card/SingleValueCard";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { CustomerService } from "./service/CustomerService";

type Props = {};

interface Country {
  name: string;
  code: string;
}

interface Representative {
  name: string;
  code: string;
}

interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

const customers: Customer[] = [
  {
    id: 1,
    name: "John",
    country: {
      code: "US",
      name: "United States",
    },
    company: "Shhshel",
    date: "Suklxh paksh purnima beshakh",
    status: "active",
    verified: false,
    activity: 0,
    representative: {
      name: "Ayush",
      code: "108",
    },
    balance: 1304,
  },
];

function TeamSection({}: Props) {
  return (
    <div className="team-section">
      <div className="section-layout column-layout-2">
        <SingleValueCard
          cardclass="p-20"
          title="Team Size"
          value="89"
          icon="pi-users"
        />
      </div>
      <div className="card mt-20">
        <DataTable
          value={customers}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="name" header="Name" style={{ width: "25%" }}></Column>
          <Column
            field="country.name"
            header="Country"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="company"
            header="Company"
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="representative.name"
            header="Representative"
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}

export { TeamSection };
