import { ReactNode } from "react";
import { Avatar } from "primereact/avatar";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function NavLayout({ children }: Props) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
  console.log(segments);

  return (
    <div className="nav-layout">
      <nav className="navbar heading_bar">
        <div className="navbar_left-container">
          <ol className="breadcrumb">
            {segments.map((segment, index) => (
              <li>{index ? `/ ${segment} ` : `${segment} `}</li>
            ))}
          </ol>
        </div>
        <div className="navbar_right-container">
          <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
        </div>
      </nav>
      <div className="nav-layout_content-container">{children}</div>
    </div>
  );
}

export { NavLayout };
