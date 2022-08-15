import { useEffect, useState } from "react";
import { authService, dbService } from "../firebase.conf";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.current);

  function loginEffect() {
    authService.onAuthStateChanged((user) => {
      setIsLoggedIn(user);
    });
  }
  useEffect(() => {
    loginEffect();
  }, []);
  async function onSignUp(email, password) {
    // console.log(email,password);
    let data = await authService.createUserWithEmailAndPassword(
      email,
      password
    );
    // console.log(data);
    if (data) {
      setIsLoggedIn(false);
    }
  }

  async function onLogin(email, password) {
    console.log("App.js => ", email, password);
    // 비동기 처리된다. async ~ await으로 처리
    let data = await authService.signInWithEmailAndPassword(email, password);
    console.log(data);
    if (data) {
      setIsLoggedIn(true);
    }
  }
  async function onLogout() {
    let data = await authService.signOut();
    if (null) {
      setIsLoggedIn(false);
    }
  }

  return (
    <div className="container">
      <AppRouter
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
        onLogin={onLogin}
        onSignUp={onSignUp}
      />
    </div>
  );
}

export default App;
