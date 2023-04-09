import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/dashboard";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { NotFound } from "./pages/NotFoundPage";
import { SignupForm } from "./components/SignupForm";

//prime recat css inports
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { LoginForm } from "./components/LoginForm";
import DashboardHome from "./pages/dashboard/home";
import { ProfileSection } from "./pages/dashboard/profile";
import { TeamSection } from "./pages/dashboard/team";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth" element={<AuthPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="forgot-password" element={<h1>Forgot Password</h1>} />
          <Route index path="*" element={<Navigate to="login" replace />} />
        </Route>
        <Route path="dashboard" element={<DashboardPage />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="profile" element={<ProfileSection />} />
          <Route path="team" element={<TeamSection />} />
          <Route index path="*" element={<Navigate to="home" replace />} />
        </Route>
        <Route path="admin" element={<AdminDashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
