import { eventTypeTS, initialStateTS } from "@/constant/auth";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const initialState: initialStateTS = {
  email: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState<initialStateTS>(initialState);
  const [conformPwd, setConformPwd] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitted(false);
    const { name, value }: eventTypeTS = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { email, password } = form;
    if (email && password) {
      console.log("formLogin:", form);
      //   dispatch(getLogin(form));
    } else {
      setSubmitted(true);
      //   toast({
      //     title: "Please fill out the form",
      //     status: "warning",
      //     duration: 3000,
      //     position: "top",
      //     isClosable: true,
      //   });
    }
  };

  return (
    <div className="auth-outer">
      <div className="site-conatiner">
        <div className="auth-inner">
          {/* logo Container */}
          <div
            className="auth-logo-box"
            style={{ backgroundImage: `url(${"/images/logo.png"})` }}
          ></div>

          {/* Heading */}
          <article className="auth-heading">
            <h1>Hello,</h1>
            <p>Welcome Back!</p>
          </article>

          {/* Form Controller */}
          <form action="" className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-email-box auth-box">
              <label htmlFor="auth-form-email">Email</label>
              <input
                type="email"
                id="auth-form-email"
                name="email"
                value={form.email}
                placeholder="Enter Email"
                onChange={handleChange}
                className={
                  submitted && !form.email ? "auth-empty-field" : "auth-normal"
                }
              />
            </div>
            <div className="auth-password-box auth-box">
              <label htmlFor="auth-form-password">Password</label>
              <div className="isPassword">
                <input
                  type={isPasswordShow ? "password" : "text"}
                  id="auth-form-password"
                  name="password"
                  value={form.password}
                  placeholder="Enter Password"
                  onChange={handleChange}
                  className={
                    submitted && !form.password
                      ? "auth-empty-field"
                      : "auth-normal"
                  }
                />
                <div
                  className={`showpassword ${
                    submitted && !form.password
                      ? "auth-empty-field-border"
                      : "auth-normal-border"
                  }`}
                  onClick={() => setIsPasswordShow(!isPasswordShow)}
                >
                  {isPasswordShow ? <BiSolidShow /> : <BiSolidHide />}
                </div>
              </div>
            </div>
            {/* FORGET PASSWORD */}
            <div className="auth-forgetpwd">
              <p>
                <Link href="#forgetpawd">Forgot Password?</Link>
              </p>
            </div>

            <div className="auth-submit-box auth-box">
              <label htmlFor=""></label>
              <input type="submit" id="auth-form-submit" />
            </div>
          </form>

          {/* Or Article */}
          <div className="auth-or">
            <div className="auth-border"></div>
            <p>Or Sign in With</p>
            <div className="auth-border"></div>
          </div>

          {/* Oauth Login */}
          <div className="auth-oauth">
            <div className="oauth-google oauth-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15901 2 4.82801 4.1685 3.15302 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
                  fill="#4CAF50"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855C15.6085 16.785 15.609 16.785 15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <div className="oauth-facebook oauth-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M20 14.19C20 17.83 17.83 20 14.19 20H13C12.45 20 12 19.55 12 19V13.23C12 12.96 12.22 12.73 12.49 12.73L14.25 12.7C14.39 12.69 14.51 12.59 14.54 12.45L14.89 10.54C14.92 10.36 14.78 10.19 14.59 10.19L12.46 10.22C12.18 10.22 11.96 10 11.95 9.73001L11.91 7.28C11.91 7.12 12.04 6.98001 12.21 6.98001L14.61 6.94C14.78 6.94 14.91 6.81001 14.91 6.64001L14.87 4.23999C14.87 4.06999 14.74 3.94 14.57 3.94L11.87 3.98001C10.21 4.01001 8.89002 5.37 8.92002 7.03L8.97 9.78C8.98 10.06 8.76001 10.28 8.48001 10.29L7.28 10.31C7.11 10.31 6.98001 10.44 6.98001 10.61L7.01001 12.51C7.01001 12.68 7.14 12.81 7.31 12.81L8.51001 12.79C8.79001 12.79 9.00999 13.01 9.01999 13.28L9.10999 18.98C9.11999 19.54 8.66999 20 8.10999 20H5.81C2.17 20 0 17.83 0 14.18V5.81C0 2.17 2.17 0 5.81 0H14.19C17.83 0 20 2.17 20 5.81V14.19Z"
                  fill="#035B81"
                />
              </svg>
            </div>
          </div>

          <p className="auth-tologin">
            Don’t have an account?
            <span>
              <Link href="/auth/signup"> Sign up</Link>
            </span>
          </p>
        </div>
      </div>

      {/* background svg */}
      <div className="auth-svg">
  
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="b" r="100%" cx="81%" cy="62%"><stop offset="0%" stop-color="#b9e7f7"/><stop offset="100%" stop-color="#e0ffff"/></radialGradient><clipPath id="a"><path fill="currentColor" d="M803.5 664Q689 828 491 843.5t-329-164Q31 500 155.5 309t323-153q198.5 38 319 191t6 317Z"/></clipPath></defs><g clip-path="url(#a)"><path fill="url(#b)" d="M803.5 664Q689 828 491 843.5t-329-164Q31 500 155.5 309t323-153q198.5 38 319 191t6 317Z"/></g></svg>
  
      </div>
    </div>
  );
}
