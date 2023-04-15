import { IUser } from "../../user";

// NOTE: IUp stands for Interface User Panel
export interface IUpProfilePage extends IUser {
  parent: IUser;
}
