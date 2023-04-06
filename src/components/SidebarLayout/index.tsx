import React from "react";

type Props = {
  SidebarComponent: React.ReactNode;
  MainComponent: React.ReactNode;
};

function SidebarLayout({ SidebarComponent, MainComponent }: Props) {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-layout__left-container card">
        {SidebarComponent}
      </div>
      <div className="sidebar-layout__right-container">{MainComponent}</div>
    </div>
  );
}

export { SidebarLayout };
