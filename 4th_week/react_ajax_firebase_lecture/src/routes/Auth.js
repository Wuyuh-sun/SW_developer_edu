import { useState } from "react";

const Auth = ({ onLogIn }) => {
  const [email, setEmail] = useState("user01@test.com");
  const [password, setPassword] = useState("123456");
  return (
    <>
      <h3>Auth</h3>
      <form action="">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <input
          type="submit"
          value="LogIn"
          onClick={(e) => {
            e.preventDefault();
            onLogIn(email, password);
          }}
        />
      </form>
    </>
  );
};
export default Auth;
