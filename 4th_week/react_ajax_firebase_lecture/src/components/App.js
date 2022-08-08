import AppRouter from "./Router";
import { useState } from "react";
import { authService, dbService } from "../firebase.conf";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggendIn] = useState(authService.currentUser);
  const [carList, setCarList] = useState([]);
  function loginEffect() {
    authService.onAuthStateChanged((user) => {
      setIsLoggendIn(user);
    });
  }
  useEffect(() => {
    loginEffect();
  }, []);
  // console.dir(authService);
  async function onLogIn(email, password) {
    // console.log(email, password);
    //비도기 처리된다. async ~ await으로 처리
    let data = await authService.signInWithEmailAndPassword(email, password);
    console.log(data);
    if (data) {
      setIsLoggendIn(true);
    }
  }
  async function onLogOut() {
    let data = await authService.signOut();
    if (null) {
      setIsLoggendIn(false);
    }
  }
  return (
    <>
      <AppRouter
        isLoggedIn={isLoggedIn}
        onLogIn={onLogIn}
        onLogOut={onLogOut}
      ></AppRouter>
    </>
  );
}

export default App;
