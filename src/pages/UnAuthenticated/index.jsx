import React, { useState } from "react";
import { Formik, isString } from "formik";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { axiosData } from "../../services/axiosData";

import WhiteLogo from "../../assets/logos/white-logo.svg";

const UnAuthenticated = () => {
  const [loginError, setLoginError] = useState("");

  const handleLoginSubmit = (values, setSubmitting) => {
    let dataToPost = JSON.stringify({
      phoneNumber: values.email,
      password: values.password,
    });

    fetch(
      "https://bespoke.trustbancgroup.com/omnichannel_interview/api/authentication/loginUser",
      {
        method: "POST",
        body: dataToPost,
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.responseMessage) {
          setLoginError(response.responseMessage);
        }

        if (response.sessionID) {
          localStorage.setItem("phoneNumber", values.email);
          localStorage.setItem("sessionID", response.sessionID);
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log("e", e);
      })
      .then(() => {
        setSubmitting(false);
      });
  };
  return (
    <>
      <div className='login-page'>
        <div className='main-login'>
          <div className='login-content'>
            <img src={WhiteLogo} />

            <div className=''>
              <p className='login-info-text'>
                Are you a new customer or an existing customer yet to setup your
                online account?
              </p>

              <Button variant={"btn-white"} className={"mt-31"}>
                GET STARTED
              </Button>
            </div>
          </div>
          <div className='main-login-form'>
            <p className='login-text'>Log in to your account</p>

            {loginError && <div className='logginMessage'>{loginError}</div>}
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                setLoginError("");
                const errors = {};
                if (!values.email) {
                  errors.email = "Please provide your username";
                } else if (!values.password) {
                  errors.password = "Please provide your password";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                handleLoginSubmit(values, setSubmitting);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className='form-grid' onSubmit={handleSubmit}>
                  <Input
                    type={"text"}
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    touched={touched.email}
                    placeholder='Username'
                    className='form-input'
                    error={errors.email}
                    disabled={isSubmitting}
                  />
                  <Input
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    touched={touched.password}
                    placeholder={"Password"}
                    className='form-input mt-12'
                    error={errors.password}
                    disabled={isSubmitting}
                  />
                  <Button
                    variant={"btn-primary"}
                    type='submit'
                    disabled={isSubmitting}
                    className={"mt-24"}
                  >
                    {isSubmitting && <div class='lds-dual-ring'></div>}
                    LOGIN
                  </Button>
                  <div className='flex-end'>
                    <a href='#' className='forgot-password-text'>
                      Forgot password?
                    </a>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnAuthenticated;
