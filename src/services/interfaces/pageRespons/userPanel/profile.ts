import { IUser } from "../../user.interface";

// NOTE: IUp stands for Interface User Panel
export interface IUpProfilePage extends IUser {
  parent: IUser;
}
