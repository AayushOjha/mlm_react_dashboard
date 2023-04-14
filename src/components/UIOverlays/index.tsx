import { useSelector } from "react-redux";
import { IStore } from "../../services/interfaces/redux";
import { FullScreenLoder } from "../Loader/FullScreenLoder";

type Props = {};

function UiOverlays({}: Props) {
  const UiOverlays = useSelector((store: IStore) => store.uiOverlays);
  return <>{UiOverlays.loaderVisible && <FullScreenLoder />}</>;
}

export { UiOverlays };
