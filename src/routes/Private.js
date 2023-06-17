import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

function Private({ children }) {

    const { signed, loading } = useContext(AuthContext)

    if (!signed) {
        return <Navigate to="/" />
    }

    return children
}


export default Private