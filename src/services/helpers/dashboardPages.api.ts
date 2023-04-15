import { fetchJSON } from "./call";

const endpoint = `${process.env.REACT_APP_API_URL}/user-panel`;

class DashboardPage {
  getProfilePage = () =>
    fetchJSON(`${endpoint}/profile`, {
      method: "GET",
    });
}

const dashboard = new DashboardPage();
export { dashboard };
