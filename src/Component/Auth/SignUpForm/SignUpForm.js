import React from "react";
import { useRef, useEffect } from "react";
import classes from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUpForm() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const dobInputRef = useRef();

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirm_password, setConfirm_Password] = useState("");

  const [confirm_Password_Focus, set_Confirm_Password_Focus] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submitted");

    const enteredFirstNameInput = firstNameInputRef.current.value;
    const enteredLastNameInput = lastNameInputRef.current.value;
    const enteredEmailInput = emailInputRef.current.value;
    const enteredAddressInput = addressInputRef.current.value;
    const enteredPasswordInput = passwordInputRef.current.value;
    const enteredConfirmPasswordInput = confirmPasswordInputRef.current.value;
    const enteredDobInput = dobInputRef.current.value.replaceAll("-", "/");

    fetch("http://143.198.82.73:8000/v1/auth/users", {
      method: "POST",
      body: JSON.stringify({
        // firstname: enteredFirstname,
        // lastname: enteredLasttname,
        first_name: enteredFirstNameInput,
        last_name: enteredLastNameInput,
        email: enteredEmailInput,
        address: enteredAddressInput,
        password: enteredPasswordInput,
        confirm_password: enteredConfirmPasswordInput,
        dob: enteredDobInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setValidPassword(passwordRegex.test(password));
  }, [password, confirm_password]);

  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
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
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" required ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" required ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            ref={passwordInputRef}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          {/* <p
            className={`${
              passwordFocus && !validPassword ? "show text" : "hide"
            } text-red-500`}
          >
            in valid password
          </p> */}
        </div>
        <div className={classes.control}>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            onChange={(e) => setConfirm_Password(e.target.value)}
            required
            ref={confirmPasswordInputRef}
            onFocus={() => set_Confirm_Password_Focus(true)}
            onBlur={() => set_Confirm_Password_Focus(false)}
          />
          {/* <p
            className={`${
              confirm_Password_Focus && !validPassword ? "show" : "hide"
            } text-red-500`}
          >
            invalid confirmpassword
          </p> */}
        </div>
        <div className={classes.control}>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" required ref={dobInputRef} />
        </div>
        <div className={classes.actions}>
          {/* <button>{isLogin ? 'Login' : 'Create Account'}</button>
          {isLoding && <p>Sending Request...</p>} */}

          <button type="submit">Create new account</button>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
