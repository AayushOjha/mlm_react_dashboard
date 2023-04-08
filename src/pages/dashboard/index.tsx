import { Outlet } from "react-router-dom";
import { PanelMenu } from "primereact/panelmenu";
import { MenuItem } from "primereact/menuitem";

import { SidebarLayout } from "../../components/SidebarLayout";
import { FluidImage } from "../../components/FluidImage";
import { NavLayout } from "../../components/NavLayout";

type Props = {};

function DashboardPage({}: Props) {
  return (
    <div className="core-page dashboard-page">
      <SidebarLayout
        MainComponent={
          <div className="core-page_container">
            <NavLayout>
              <Outlet />
            </NavLayout>
          </div>
        }
        SidebarComponent={<SidebarMenu />}
      />
    </div>
  );
}

const SidebarMenu = () => {
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "My Profile",
      icon: "pi  pi-user-edit",
    },
    {
      label: "My Team",
      icon: "pi pi-sitemap",
    },
    {
      label: "Withdraw",
      icon: "pi pi-money-bill",
    },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-logo">
        <FluidImage
          altText="barnd logo"
          imageUrl="/images/logoHorizontal.png"
        />
      </div>
      <PanelMenu model={items} className="w-full" />
    </div>
  );
};

export { DashboardPage };
