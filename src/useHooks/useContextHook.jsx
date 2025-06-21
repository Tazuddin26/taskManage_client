import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useContextHook = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useContextHook;
