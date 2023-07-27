import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("Must be used inside an AuthContextProvider");
  }
  return context;
};

export default useAuthContext;
