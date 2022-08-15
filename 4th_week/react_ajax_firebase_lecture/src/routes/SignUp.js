import { useState } from "react";

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState("user01@test.com");
  const [password, setPassword] = useState("123456");
  return (
    <>
      <h1>Sign Up</h1>
      <form action="">
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <br />
        <input
          type="submit"
          value="가입"
          onClick={(e) => {
            e.preventDefault();
            onSignUp(email, password);
          }}
        />
      </form>
    </>
  );
};

export default SignUp;
