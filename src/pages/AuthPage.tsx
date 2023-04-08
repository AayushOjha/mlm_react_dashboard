import { SidebarLayout } from "../components/SidebarLayout";
import { FluidImage } from "../components/FluidImage";
import { AuthBannerImage } from "../services/constants";
import { Outlet } from "react-router-dom";

type Props = {};

function AuthPage({}: Props) {
  return (
    <div className="auth-page core-page">
      <SidebarLayout
        MainComponent={
          <div className="core-page_container">
            <Outlet />
          </div>
        }
        SidebarComponent={<FluidImage imageUrl={AuthBannerImage} />}
      />
    </div>
  );
}

export { AuthPage };
