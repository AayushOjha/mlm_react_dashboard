import { HashLoader } from "react-spinners";
import { PrimaryColor } from "../../services/constants/colors";

type Props = {};

function FullScreenLoder({}: Props) {
  return (
    <div className="full-screen-loader">
      <HashLoader
        className="loader"
        color={PrimaryColor}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default FullScreenLoder;
