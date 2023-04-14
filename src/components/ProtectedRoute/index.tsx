import { useDispatch } from "react-redux";
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { user } from "../../services/helpers/user.api";
import { storeUser } from "../../store/slices/userSlice";
import { FullScreenLoder } from "../Loader/FullScreenLoder";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const [userAuthorised, setuserAuthorised] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    user
      .getDetails()
      .then((response) => {
        dispatch(storeUser(response.data));
        setuserAuthorised(true);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullScreenLoder />;
  }

  if (userAuthorised) {
    return <>{children}</>;
  }
  return <Navigate to={"/auth/login"} />;
};

export { ProtectedRoute };
