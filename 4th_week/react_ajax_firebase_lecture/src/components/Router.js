import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../routes/Home"
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn, onLogIn, onLogOut})=>{
    
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={isLoggedIn ? (<Home onLogOut={onLogOut}></Home>) : <Auth onLogIn={onLogIn}></Auth>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter;