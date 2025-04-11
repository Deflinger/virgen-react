import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard =()=>{
    const token = sessionStorage.getItem('token')
    console.log(token)
    return token ? <Outlet/> : <Navigate to="/login"  replace/>
}
