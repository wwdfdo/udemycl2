import React from "react";
import { useRef, useEffect } from "react";
import classes from "./SignUpForm.module.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
// const firstnameRegex = /^[A-z][A-z0-9-_]{3,23}$/;
// const lastnameRegex = /^[A-z][A-z0-9-_]{3,23}$/;
// const addressRegex = /^[A-z][A-z0-9-_]{3,23}$/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUpForm() {
  const history = useNavigate();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const dobInputRef = useRef();

  const [enteredFirstname, setEnteredFirstName] = useState("");
  // const [validFirstName, setValidFirstName] = useState(false);

  const [enteredLastname, setEnteredLastName] = useState("");
  // const [validLastName, setValidLastName] = useState(false);

  const [enteredAddress, setEnteredAddress] = useState("");
  // const [validAddress, setValidAddress] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [isLoding, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log("submitted");

    const enteredDobInput = dobInputRef.current.value.replaceAll("-", "/");

    fetch("http://143.198.82.73:8000/v1/auth/users", {
      method: "POST",
      body: JSON.stringify({
        first_name: enteredFirstname,
        last_name: enteredLastname,
        email: enteredEmail,
        address: enteredAddress,
        password: enteredPassword,
        confirm_password: enteredConfirmPassword,
        dob: enteredDobInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);

        response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        history("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // setValidFirstName(firstnameRegex.test(enteredFirstname));
    // setValidLastName(lastnameRegex.test(enteredLastname));
    // setValidAddress(addressRegex.test(enteredAddress));
    setValidEmail(emailRegex.test(enteredEmail));
    setValidPassword(passwordRegex.test(enteredPassword));
    setValidConfirmPassword(enteredPassword === enteredConfirmPassword);
  }, [
    enteredFirstname,
    enteredLastname,
    enteredAddress,
    enteredEmail,
    enteredPassword,
    enteredConfirmPassword,
  ]);

  return (
    <section className={classes.auth}>
      <h1 className="text-xl font-bold pb-2">Sign Up and Start Learning</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="first_name">First Name</label>
          {/* <p
            id="uidnote"
            className={`${
              enteredFirstname && !validFirstName ? "block" : "hidden"
            } text-red-500 text-sm pb-2`}
          >
            4 to 24 characters. Must begin with a letter
          </p> */}
          <input
            type="text"
            id="first_name"
            required
            ref={firstNameInputRef}
            onChange={(e) =>
              setEnteredFirstName(firstNameInputRef.current.value)
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="last_name">Last Name</label>
          {/* <p
            id="uidnote"
            className={`${
              enteredLastname && !validLastName ? "block" : "hidden"
            } text-red-500 text-sm pb-2`}
          >
            4 to 24 characters. Must begin with a letter
          </p> */}
          <input
            type="text"
            id="last_name"
            required
            ref={lastNameInputRef}
            onChange={(e) => setEnteredLastName(lastNameInputRef.current.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <p
            id="uidnote"
            className={`${
              enteredEmail && !validEmail ? "block" : "hidden"
            } text-red-500 text-sm pb-2`}
          >
            invalid email yet
          </p>
          <input
            type="email"
            id="email"
            required
            ref={emailInputRef}
            onChange={(e) => setEnteredEmail(emailInputRef.current.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          {/* <p
            id="uidnote"
            className={`${
              enteredAddress && !validAddress ? "block" : "hidden"
            } text-red-500 text-sm pb-2`}
          >
            4 to 24 characters. Must begin with a letter
          </p> */}
          <input
            type="text"
            id="address"
            required
            ref={addressInputRef}
            onChange={(e) => setEnteredAddress(addressInputRef.current.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <p
            id="uidnote"
            className={`${
              enteredPassword && !validPassword ? "block" : "hidden"
            } text-red-500 text-sm pb-2`}
          >
            8 to 24 characters. Must Incude capital letters Letters, numbers,
            symbols
          </p>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            onChange={(e) => setEnteredPassword(passwordInputRef.current.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="confirm_password">Confirm Password</label>
          <p
            id="uidnote"
            className={`${
              enteredConfirmPassword && !validConfirmPassword
                ? "block"
                : "hidden"
            } text-red-500 text-sm pb-2`}
          >
            password not matching
          </p>
          <input
            type="password"
            id="confirm_password"
            onChange={(e) =>
              setEnteredConfirmPassword(confirmPasswordInputRef.current.value)
            }
            required
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" required ref={dobInputRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Register</button>
          {isLoding && <p className="text-white">Sending Request....</p>}
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
