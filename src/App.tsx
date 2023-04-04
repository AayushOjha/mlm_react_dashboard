import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin/*" element={<AdminDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
