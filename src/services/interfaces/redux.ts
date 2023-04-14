import { IUser } from "./user";
import { IUiOverlay } from "./uiOverlays";
export interface IStore {
  user: IUser;
  uiOverlays: IUiOverlay;
}
