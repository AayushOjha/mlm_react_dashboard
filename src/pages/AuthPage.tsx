import { SidebarLayout } from "../components/SidebarLayout";
import { FluidImage } from "../components/FluidImage";
import { AuthBannerImage } from "../services/constants";
import { Outlet } from "react-router-dom";

type Props = {};

function AuthPage({}: Props) {
  return (
    <SidebarLayout
      MainComponent={
        <div className="auth-page-container">
          <Outlet />
        </div>
      }
      SidebarComponent={<FluidImage imageUrl={AuthBannerImage} />}
    />
  );
}

export { AuthPage };
