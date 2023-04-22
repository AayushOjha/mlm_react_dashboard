import { useEffect, useState } from "react";
import randomColor from "randomcolor";
import { Avatar } from "primereact/avatar";
import { useDispatch } from "react-redux";

import { dashboard } from "../../../services/helpers/dashboardPages.api";
import { setLoader } from "../../../store/slices/uiOverlaysSlice";
import { IUpProfilePage } from "../../../services/interfaces/pageResponse/userPanel/profile";

type Props = {};

function ProfileSection({}: Props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUpProfilePage | undefined>();

  useEffect(() => {
    dispatch(setLoader(true));
    dashboard
      .getProfilePage()
      .then((response) => {
        setUser(response.data);
      })
      .catch
      // TODO: creat a common method to make user logout and redirect to login page, then create class or a procidure to invoke it automatically whrn api givs error likr (500)
      ()
      .finally(() => {
        dispatch(setLoader(false));
      });
  }, []);

  if (!user) {
    return <></>;
  }

  return (
    <div className="profile-section card p-20">
      <Avatar
        label={user.name.slice(0, 1).toUpperCase()}
        size="xlarge"
        style={{
          backgroundColor: randomColor({ luminosity: "dark" }),
          color: "#fff",
        }}
      />
      <div className="heading__sm mt-10 ml-5">{user.username}</div>
      <div className="seperator mt-10 mb-10" />
      <div className="section-layout column-layout-2">
        <div className="user-info-box">
          <i className="pi pi-user user-info-box_icon"></i>
          <span className="user-info-box_label">Name</span>
          <span className="user-info-box_value">{user.name}</span>
        </div>
        <div className="user-info-box">
          <i className="pi pi-envelope user-info-box_icon"></i>
          <span className="user-info-box_label">Email</span>
          <span className="user-info-box_value">{user.email}</span>
        </div>
        <div className="user-info-box">
          <i className="pi pi-phone user-info-box_icon"></i>
          <span className="user-info-box_label">Phone</span>
          <span className="user-info-box_value">{user.phone || "- -"}</span>
        </div>
        <div className="user-info-box">
          <i className="pi pi-sitemap user-info-box_icon"></i>
          <span className="user-info-box_label">Member of</span>
          <span className="user-info-box_value">
            {user.parent.username} | {user.parent.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export { ProfileSection };
