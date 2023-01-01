import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const loginSubmit = async (formData) => {
    debugger;
    setLoader(true);
    const response = await login(formData);
    if (response.status === 200) {
      toast.success("Successfully Login!");
      window.sessionStorage.setItem(
        "streamUser",
        JSON.stringify(response.data)
      );
      window.dispatchEvent(new Event("storage"));
      setTimeout(() => {
        navigate("/");
      }, 0);
      setLoader(false);
    } else {
      toast.error(response.data);
      setLoader(false);
    }
  };

  return (
    <>
      <section className="sign-in-page">
        <Toaster />
        <div className="container">
          <div className="row justify-content-center align-items-center height-self-center">
            <div className="col-lg-5 col-md-12 align-self-center form-padding">
              <div className="sign-user_card">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">Sign in</h3>
                    <form
                      className="mt-4"
                      action="index.html"
                      onSubmit={handleSubmit(loginSubmit)}
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mb-0"
                          id="exampleInputEmail2"
                          placeholder="Enter email"
                          autocomplete="off"
                          {...register("email", { required: true })}
                        />
                        {errors.email?.type === "required" && (
                          <p className="error_validation">Email is required</p>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control mb-0"
                          id="exampleInputPassword2"
                          placeholder="Password"
                          {...register("passowrd", { required: true })}
                        />
                        {errors.passowrd?.type === "required" && (
                          <p className="error_validation">
                            Password is required
                          </p>
                        )}
                      </div>
                      <div className="sign-info">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loader}
                        >
                          {loader ? (
                            <div class="loader">Loading...</div>
                          ) : (
                            "Sign in"
                          )}
                        </button>

                        <div className="custom-control custom-checkbox d-inline-block">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?
                    <Link to="/account/signup" className="text-primary ml-2">
                      Sign Up
                    </Link>
                  </div>
                  {/* <div className="d-flex justify-content-center links">
                    <a href="pages-recoverpw.html" className="f-link">
                      Forgot your password?
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Sign in END --> */}
          {/* <!-- color-customizer --> */}
        </div>
      </section>
      {/* <!-- Sign in END --> */}
    </>
  );
}

export default SignIn;
