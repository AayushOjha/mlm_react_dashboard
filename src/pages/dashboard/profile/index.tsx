import randomColor from "randomcolor";
import { Avatar } from "primereact/avatar";
import { useSelector } from "react-redux";
import { IStore } from "../../../services/interfaces/redux";

type Props = {};

function ProfileSection({}: Props) {
  const user = useSelector((store: IStore) => store.user);

  return (
    <div className="profile-section card p-20">
      <Avatar
        label="A"
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
          <span className="user-info-box_value">ADMIN | Admin User</span>
        </div>
      </div>
    </div>
  );
}

export { ProfileSection };
