import { authContext } from "context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () =>{
    useContext(authContext);
} 