import { Navigate } from "react-router-dom";

export default function ProtectedRouter({ isAuthenticated, to, children }) {
    if (!isAuthenticated) return <Navigate to={to} />

    return children;
}
