import { useState, useRef, useContext } from 'react'

import { useNavigate, Link } from 'react-router-dom'

// import { useHistory } from "react-router-dom";

import AuthContext from '../../store/auth-context'

import classes from './AuthForm.module.css'

const AuthForm = () => {
  const emailInputRef = useRef()
  // const firstnameInputRef = useRef();
  // const lastnameInputRef = useRef();
  const passwordInputRef = useRef()

  const history = useNavigate()

  // const history = useHistory();

  const authCtx = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true)
  const [isLoding, setIsLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    // const enteredFirstname = firstnameInputRef.current.value;
    // const enteredLasttname = lastnameInputRef.current.value;

    setIsLoading(true)

    let url

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        // firstname: enteredFirstname,
        // lastname: enteredLasttname,
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false)
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed'

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message
            }

            throw new Error(errorMessage)
          })
        }
      })
      .then((data) => {
        authCtx.login(data.idToken)

        console.log(data)

        history('/backendPage')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
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
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          {isLoding && <p>Sending Request...</p>}
          <Link to={`/register`}>
            <button type="submit" className={classes.toggle}>
              Create new account
            </button>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
