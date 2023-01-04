import React from "react";
import { useRef } from "react";
import classes from "./SignInForm.module.css";
import { Link } from "react-router-dom";

function SignInForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        {/* {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="email">First Name</label>
            <input
              type="text"
              id="firstname"
              required
              ref={firstnameInputRef}
            />
          </div>
        )} */}
        {/* {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="email">Last Name</label>
            <input type="text" id="lastname" required ref={lastnameInputRef} />
          </div>
        )} */}
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
          {/* <button>{isLogin ? 'Login' : 'Create Account'}</button>
          {isLoding && <p>Sending Request...</p>} */}

          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default SignInForm;
