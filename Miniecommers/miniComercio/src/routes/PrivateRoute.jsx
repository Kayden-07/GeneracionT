import { Children } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute() {
    const isAuthenticated = false; // Cambia esto según tu lógica de autenticación
    return  isAuthenticated ? Children : <Navigate to="/" />;
}

export default PrivateRoute;