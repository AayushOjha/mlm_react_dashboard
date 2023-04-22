import { IUser } from "./user.interface";
import { IUiOverlay } from "./uiOverlays";
export interface IStore {
  user: IUser;
  uiOverlays: IUiOverlay;
}
