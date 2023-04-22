import { fetchJSON } from "./call";

const endpoint = `${process.env.REACT_APP_API_URL}/user-panel`;

class DashboardPage {
  getHomePage = () => fetchJSON(`${endpoint}/home`, { method: "GET" });

  getProfilePage = () => fetchJSON(`${endpoint}/profile`, { method: "GET" });

  getTeamPage = () => fetchJSON(`${endpoint}/team`, { method: "GET" });
}

const dashboard = new DashboardPage();
export { dashboard };
