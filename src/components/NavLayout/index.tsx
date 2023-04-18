import { ReactNode, useRef } from "react";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";
import Cookies from "js-cookie";

type Props = {
  children: ReactNode;
};

function NavLayout({ children }: Props) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  const menu = useRef<Menu>(null);
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: "Log Out",
      icon: "pi pi-power-off",
      command: () => {
        Cookies.remove("auth_token");
        navigate("/auth/login");
      },
    },
  ];

  return (
    <div className="nav-layout">
      <nav className="navbar heading_bar">
        <div className="navbar_left-container">
          <ol className="breadcrumb">
            {segments.map((segment, index) => (
              <li key={index}>{index ? `/ ${segment} ` : `${segment} `}</li>
            ))}
          </ol>
        </div>
        <div className="navbar_right-container">
          <Menu model={items} popup ref={menu} className="avatar-dropdown" />
          <Avatar
            icon="pi pi-user"
            size="xlarge"
            shape="circle"
            onClick={(e) => {
              menu.current?.toggle(e);
            }}
          />
        </div>
      </nav>
      <div className="nav-layout_content-container">{children}</div>
    </div>
  );
}

export { NavLayout };
