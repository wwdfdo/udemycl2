import React from "react";
import { useRef, useContext, useState } from "react";
import classes from "./SignInForm.module.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

function SignInForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useNavigate();

  const authCtx = useContext(AuthContext);

  const [isLoding, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const enteredSignEmail = emailInputRef.current.value;
    const enteredSignPassword = passwordInputRef.current.value;

    console.log(enteredSignEmail);
    console.log(enteredSignPassword);

    fetch("http://143.198.82.73:8000/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: enteredSignEmail,
        password: enteredSignPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            console.log(data.message);
          });
        }
      })
      .then((data) => {
        authCtx.login(data);

        console.log(data.access_token);

        history("/backendPage");
      });
  };

  return (
    <section className={classes.auth}>
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Login</button>
          {isLoding && <p className="text-white">Sending Request....</p>}
        </div>
      </form>
    </section>
  );
}

export default SignInForm;
