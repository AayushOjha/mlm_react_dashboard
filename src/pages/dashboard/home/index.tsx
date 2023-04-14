import { useSelector } from "react-redux";

import { SigleValueCard } from "../../../components/Card";
import { IStore } from "../../../services/interfaces/redux";

type Props = {};

function DashboardHome({}: Props) {
  const user = useSelector((store: IStore) => store.user);

  return (
    <div className="dashboard-home">
      <div className="card heading primary_colored">
        Hello {user.name}, Welcome Back!!
      </div>
      <div className="section-layout column-layout-2">
        <SigleValueCard
          title="Totle Earning"
          value="$2468"
          icon="pi-money-bill"
        />
        <SigleValueCard title="Team Size" value="89" icon="pi-users" />
        <SigleValueCard
          title="Money Withdrawal"
          value="$1500"
          icon="pi-sign-out"
        />
      </div>
    </div>
  );
}

export default DashboardHome;
