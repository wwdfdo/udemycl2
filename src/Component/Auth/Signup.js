//import { faPray } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { fetchRequest, login, signup } from "@api";
const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  password: "",
  confirm_password: "",
  dob: "",
};

function Signup(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const [touched, setTouched] = useState([]);
  const [validate, setValidate] = useState(null);
  const [ready, setReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const formInfo = {
    first_name: {
      label: "First Name",
      type: "text",
      regx: /^[A-z][A-z0-9-_]{3,23}$/,
      error: "First Name is not valid",
      htmlfor: "first_name",
    },
    last_name: {
      label: "Last Name",
      type: "text",
      regx: /^[A-z][A-z0-9-_]{3,23}$/,
      error: "Last name is not valid",
      htmlfor: "last_name",
    },
    email: {
      label: "Email",
      type: "email",
      regx: /^[\p{L}!#-'*+\-/\d=?^-~]+(.[\p{L}!#-'*+\-/\d=?^-~])*@[^@\s]{2,}$/,
      error: "email not valid",
      htmlfor: "email",
    },
    address: {
      label: "Address",
      type: "text",
      regx: /^[#.0-9a-zA-Z\s,-]+$/,
      error: "address not valid",
      htmlfor: "address",
    },
    password: {
      label: "Password",
      type: "password",
      regx: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      error: "password not valid",
      htmlfor: "password",
    },
    confirm_password: {
      label: "Confirm Password",
      type: "password",
      regx: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      error: "password not valid",
      htmlfor: "confirm_password",
    },
    dob: {
      label: "Date of Birth",
      type: "date",
      regx: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      error: "dob is shit",
      htmlfor: "dob",
    },
  };

  const resetSignUp = () => {
    setFormValues(initialFormValues);
    setTouched([]);
    setReady(false);
  };

  const getFormattedFormValues = () => {
    return {
      ...formValues,
      dob: formValues.dob.replaceAll("-", "/"),
    };
  };
  // const getLoginDetails = () => {
  //   return {
  //     email: formValues.email,
  //     password: formValues.password,
  //   };
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const signupResposne = await signup(getFormattedFormValues());
      const signupData = await signupResposne.json();
      console.log({ signupData });

      setIsLoading(false);
      setNotification(signupData?.message);
      resetSignUp();
    } catch (e) {
      setIsLoading(false);
      console.error("===>", e.message);
    }
  };

  const onInputChange = ({ target: { id, value } }) => {
    setFormValues((previousFormValues) => ({
      ...previousFormValues,
      [id]: value,
    }));
  };

  const handleFocus = (formKey) => {
    setTouched((prevState) => [...prevState, formKey]);
  };

  useEffect(() => {
    const tesed = {};

    Object.keys(formValues).forEach((formKey) => {
      if (formValues[formKey] !== "") {
        if (formKey === "confirm_password") {
          tesed["confirm_password"] =
            formInfo["confirm_password"].regx.test(
              formValues["confirm_password"]
            ) && formValues["confirm_password"] === formValues["password"];
        } else {
          tesed[formKey] = formInfo[formKey].regx.test(formValues[formKey]);
        }
      } else {
        tesed[formKey] = false;
      }
    });
    setValidate(tesed);
    //eslint-disable-next-line
  }, [formValues]);

  useEffect(() => {
    let ready =
      validate !== null && Object.keys(validate).length >= 2
        ? Object.keys(validate).reduce((prevBool, formKey) => {
            return prevBool && validate[formKey];
          }, true)
        : false;

    setReady(ready);
  }, [validate]);

  return (
    <div className="text-black  flex flex-col items-center justify-center w-full pt-10  ">
      {notification && (
        <div className="text-green-500 font-bold pb-2">{notification}</div>
      )}
      <form
        onSubmit={submitHandler}
        className=" flex flex-col w-[400px] items-center mx-auto justify-center p-6 bg-[#38015c] gap-3"
      >
        {Object.keys(formInfo).map((formKey, index) => (
          <div key={index} className="w-full">
            <label className="text-white" htmlFor={formInfo[formKey].htmlfor}>
              {formInfo[formKey].label} :{" "}
            </label>
            <br />
            <input
              onBlur={() => handleFocus(formKey)}
              type={formInfo[formKey].type}
              id={formKey}
              className=" outline-none rounded-md py-[0.1rem] px-[0.5rem] w-full"
              onChange={onInputChange}
              value={formValues[formKey]}
              placeholder={formInfo[formKey].label}
            />
            {touched.includes(formKey) && !validate[formKey] && (
              <p className="text-red-500">{formInfo[formKey].error}</p>
            )}
          </div>
        ))}

        <button
          disabled={!ready || isLoading}
          className="bg-pink-700 px-3 p-1 disabled:opacity-100 mt-5 font-bold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
