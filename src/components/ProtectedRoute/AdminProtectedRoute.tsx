import { useDispatch } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { user } from "../../services/helpers/user.api";
import { storeUser } from "../../store/slices/userSlice";
import { setLoader } from "../../store/slices/uiOverlaysSlice";

const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setisLoading] = useState(true); //NOTE: Here we have to maintain a local state, because initallu redux loader is false

  useEffect(() => {
    dispatch(setLoader(true));
    user
      .isAdmin()
      .then((response) => {
        dispatch(storeUser(response.data));
        setIsAdmin(true);
        dispatch(setLoader(false));
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoader(false));
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return <></>;
  }
  if (isAdmin) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/auth/login"} />;
  }
};

export { AdminProtectedRoute };
