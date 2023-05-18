import { Navigate,Outlet } from "react-router-dom";

const Proctected = ()=>{
    let token = localStorage.getItem("authorization");
    if(token === undefined) token="";
    return(
        <>
        {token?<Outlet/>: <Navigate to="/signup"/>}
        </>
    )
}

export default Proctected;