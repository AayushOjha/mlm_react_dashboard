import { IFWithdrawalRequest } from "../interfaces/postForms/withdrawalRequest";
import { fetchJSON } from "./call";

const endpoint = `${process.env.REACT_APP_API_URL}/user-panel`;

class DashboardPage {
  getHomePage = () => fetchJSON(`${endpoint}/home`, { method: "GET" });

  getProfilePage = () => fetchJSON(`${endpoint}/profile`, { method: "GET" });

  getTeamPage = () => fetchJSON(`${endpoint}/team`, { method: "GET" });

  getEarningsPage = () => fetchJSON(`${endpoint}/earnings`, { method: "GET" });

  getWithdrawalsPage = () =>
    fetchJSON(`${endpoint}/withdrawals`, { method: "GET" });

  getWithdrawalRequest = () =>
    fetchJSON(`${endpoint}/withdrawal_request`, { method: "GET" });

  postWithdrawalRequest = (data: IFWithdrawalRequest) =>
    fetchJSON(`${endpoint}/withdrawal_request`, { method: "POST", data: data });
}

const dashboard = new DashboardPage();
export { dashboard };
