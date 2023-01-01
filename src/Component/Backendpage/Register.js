import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../api/axios";
import "./Register.css";

const FIRSTNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const LASTNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const ADDRESS_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/v1/auth/users";

const Register = () => {
  const firstNameRef = useRef();

  // const userRef = useRef();
  const errRef = useRef();

  const [first_name, setFirst_Name] = useState("");
  const [valid_first_name, setValidFirst_Name] = useState(false);
  const [first_name_focus, setFirst_Name_Focus] = useState(false);

  const [last_name, setLast_Name] = useState("");
  const [valid_last_name, setValid_Last_Name] = useState(false);
  const [last_name_focus, setLast_Name_Focus] = useState(false);

  const [address, setAddress] = useState("");
  const [valid_address, setValid_Address] = useState(false);
  const [address_focus, setAddress_Focus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirm_password, setConfirm_Password] = useState("");
  const [validConfirm_Password, setValid_Confirm_Password] = useState(false);
  const [confirm_Password_Focus, set_Confirm_Password_Focus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFirst_Name(FIRSTNAME_REGEX.test(first_name));
    setValid_Last_Name(LASTNAME_REGEX.test(last_name));
    setValid_Address(ADDRESS_REGEX.test(address));
  }, [first_name, last_name, address]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValid_Confirm_Password(password === confirm_password);
  }, [password, confirm_password]);

  useEffect(() => {
    setErrMsg("");
  }, [first_name, last_name, address, password, confirm_password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = FIRSTNAME_REGEX.test(first_name);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ first_name, last_name, address, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setFirst_Name("");
      setPassword("");
      setConfirm_Password("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <main className="flex items-center justify-center min-h-full py-10 ">
      <>
        {success ? (
          <section className="signsection">
            <h1>Success!</h1>
            <p>
              <a href="#">Sign In</a>
            </p>
          </section>
        ) : (
          <section className="signsection bg-blue-500">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Register</h1>
            <form className="signform" onSubmit={handleSubmit}>
              <label htmlFor="firstname">
                First Name:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={valid_first_name ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={
                    valid_first_name || !first_name ? "hide" : "invalid"
                  }
                />
              </label>
              <input
                type="text"
                id="firstname"
                ref={firstNameRef}
                autoComplete="off"
                onChange={(e) => setFirst_Name(e.target.value)}
                value={first_name}
                required
                aria-invalid={valid_first_name ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setFirst_Name_Focus(true)}
                onBlur={() => setFirst_Name_Focus(false)}
              />
              <p
                id="uidnote"
                className={
                  first_name_focus && first_name && !valid_first_name
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              {/* // Last Name */}
              <label htmlFor="last_name">
                Last Name:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={valid_last_name ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={valid_last_name || !last_name ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                id="last_name"
                autoComplete="off"
                onChange={(e) => setLast_Name(e.target.value)}
                value={last_name}
                required
                aria-invalid={valid_last_name ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setLast_Name_Focus(true)}
                onBlur={() => setLast_Name_Focus(false)}
              />
              <p
                id="uidnote"
                className={
                  last_name_focus && last_name && !valid_last_name
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              {/* Address */}

              <label htmlFor="address">
                Address:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={valid_address ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={valid_address || !address ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                id="address"
                autoComplete="off"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
                aria-invalid={valid_address ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setAddress_Focus(true)}
                onBlur={() => setAddress_Focus(false)}
              />
              <p
                id="uidnote"
                className={
                  address_focus && address && !valid_address
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPassword ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPassword || !password ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  passwordFocus && !validPassword ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <label htmlFor="confirm_password">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={
                    validConfirm_Password && confirm_password ? "valid" : "hide"
                  }
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={
                    validConfirm_Password || !confirm_password
                      ? "hide"
                      : "invalid"
                  }
                />
              </label>
              <input
                type="password"
                id="confirm_password"
                onChange={(e) => setConfirm_Password(e.target.value)}
                value={confirm_password}
                required
                aria-invalid={validConfirm_Password ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => set_Confirm_Password_Focus(true)}
                onBlur={() => set_Confirm_Password_Focus(false)}
              />
              <p
                id="confirmnote"
                className={
                  confirm_Password_Focus && !validPassword
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>

              <label for="start">Start date:</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
              />

              <button
                disabled={
                  !valid_first_name ||
                  !valid_last_name ||
                  !valid_address ||
                  !validPassword ||
                  !validConfirm_Password
                    ? true
                    : false
                }
              >
                Sign Up
              </button>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a href="#">Sign In</a>
              </span>
            </p>
          </section>
        )}
      </>
    </main>
  );
};

export default Register;
