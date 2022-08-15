import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import SignUp from "../routes/SignUp";

const AppRouter = ({ isLoggedIn, onLogin, onLogout, onSignUp }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home onLogout={onLogout}></Home>
            ) : (
              <Auth onLogin={onLogin}></Auth>
            )
          }
        />
        <Route path="/signup" element = {<SignUp onSignUp={onSignUp}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
