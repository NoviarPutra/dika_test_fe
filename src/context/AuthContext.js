import jwtDecode from "jwt-decode";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decode = jwtDecode(localStorage.getItem("token"));
      if (decode) {
        dispatch({ type: "LOGIN", payload: decode });
      }
    }
  }, []);
  const [state, dispatch] = useReducer(authReducer, { user: null });
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
