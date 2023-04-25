import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userService } from "../../services";
import { AppState } from "../../store";
import {
  loginFail,
  logout,
  onLogin,
  onLoginSuccess,
} from "../../store/account/actions";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../../store/account/types";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const loading = useSelector((state: AppState) => state.account.loading);
  const error = useSelector((state: AppState) => state.account.error);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = input;
    e.preventDefault();
    setSubmitted(true);

    if (email && password) {
      dispatch(onLogin(email, password));

      const res = await userService.login(email, password);

      if (res?.error) {
        dispatch(loginFail(res.error.toString()));
      } else {
        dispatch(onLoginSuccess(res));
      }
    }
  };

  return (
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          onChange={handleChange}
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          onChange={handleChange}
                          name="password"
                        />
                      </div>
                      {/* <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div> */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw" /> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
