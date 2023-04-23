import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//prime recat css inports
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/dashboard";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { NotFound } from "./pages/NotFoundPage";
import { SignupForm } from "./components/SignupForm";
import { LoginForm } from "./components/LoginForm";
import DashboardHome from "./pages/dashboard/home";
import { ProfileSection } from "./pages/dashboard/profile";
import { TeamSection } from "./pages/dashboard/team";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UiOverlays } from "./components/UIOverlays";
import { Earnings } from "./pages/dashboard/money/Earnings";
import { Withdrawals } from "./pages/dashboard/money/Withdrawal";
import { RequestWithdrawal } from "./pages/dashboard/money/RequestWithdrawal";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="auth" element={<AuthPage />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="forgot-password" element={<h1>Forgot Password</h1>} />
            <Route index path="*" element={<Navigate to="login" replace />} />
          </Route>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<DashboardHome />} />
            <Route path="profile" element={<ProfileSection />} />
            <Route path="team" element={<TeamSection />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="withdrawals">
              <Route index element={<Withdrawals />} />
              <Route path="new" element={<RequestWithdrawal />} />
            </Route>
            <Route index path="*" element={<Navigate to="home" replace />} />
          </Route>
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <UiOverlays />
    </>
  );
};

export default App;
