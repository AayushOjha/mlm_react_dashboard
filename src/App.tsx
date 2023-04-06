import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { NotFound } from "./pages/NotFoundPage";
import { SignupForm } from "./components/SignupForm";

//prime recat css inports
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth" element={<AuthPage />}>
          <Route index element={<h1>Log in</h1>} />
          <Route path="Login" element={<h1>Log in</h1>} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="forgot-password" element={<h1>Forgot Password</h1>} />
        </Route>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="admin" element={<AdminDashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
