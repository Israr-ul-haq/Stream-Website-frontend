import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { signUp } from "../../services/AuthService";

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [loader, setLoader] = useState();
  const [validationErrors, setValidationErrors] = useState({
    paswordValidation: false,
    emailValidation: false,
  });

  const navigate = useNavigate();
  const submit = async (formData) => {
    debugger;
    let pattern =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const validationErrorsCopy = { ...validationErrors };
    let validCount = 0;

    if (formData.confirmPassword !== formData.password) {
      validationErrorsCopy.paswordValidation = true;
      validCount++;
    } else {
      validationErrorsCopy.paswordValidation = false;
    }

    if (!pattern.test(formData.email)) {
      validationErrorsCopy.emailValidation = true;
      validCount++;
    } else {
      validationErrorsCopy.emailValidation = false;
    }

    setValidationErrors(validationErrorsCopy);

    if (validCount > 0) {
      return true;
    }
    setLoader(true);
    const response = await signUp(formData);
    if (response.status === 201) {
      toast.success("Success");
      setTimeout(() => {
        navigate("/account/login");
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
            <div className=" align-self-center col-md-12 col-lg-7 form-padding">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <form
                      className="row"
                      action="index.html"
                      onSubmit={handleSubmit(submit)}
                    >
                      <div className="form-group col-md-6">
                        <label for="exampleInputEmail4">First Name</label>
                        <input
                          type="text"
                          className="form-control mb-0 btn-border"
                          id="exampleInputEmail4"
                          placeholder="First Name"
                          autocomplete="off"
                          {...register("first_name", { required: true })}
                        />
                        {errors.first_name?.type === "required" && (
                          <p className="error_validation">
                            First name is required
                          </p>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label for="exampleInputEmail5">Last Name</label>
                        <input
                          type="text"
                          className="form-control mb-0 btn-border"
                          id="exampleInputEmail5"
                          placeholder="Last Name"
                          autocomplete="off"
                          {...register("last_name", { required: true })}
                        />
                        {errors.last_name?.type === "required" && (
                          <p className="error_validation">
                            Last name is required
                          </p>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label for="exampleInputEmail3">E-mail</label>
                        <input
                          type="email"
                          className="form-control mb-0 btn-border"
                          id="exampleInputEmail3"
                          placeholder="Enter email"
                          autocomplete="off"
                          {...register("email", { required: true })}
                        />
                        {errors.email?.type === "required" && (
                          <p className="error_validation">Email is required</p>
                        )}
                        {validationErrors.emailValidation ? (
                          <p className="error_validation">Email is not valid</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label for="exampleInputEmail3">Phone Number</label>
                        <input
                          type="number"
                          className="form-control mb-0 btn-border"
                          id="exampleInputEmail3"
                          placeholder="Enter phone number"
                          autocomplete="off"
                          {...register("phoneNumber", { required: true })}
                        />
                        {errors.phoneNumber?.type === "required" && (
                          <p className="error_validation">
                            Phone number is required
                          </p>
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label for="exampleInputEmail6">Password</label>
                        <input
                          type="password"
                          className="form-control mb-0 btn-border"
                          id="exampleInputEmail6"
                          placeholder="Password"
                          autocomplete="off"
                          {...register("password", { required: true })}
                        />
                        {errors.password?.type === "required" && (
                          <p className="error_validation">
                            Password is required
                          </p>
                        )}
                        {validationErrors.paswordValidation ? (
                          <p className="error_validation">
                            Password must be matching
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group col-md-6">
                        <label for="">Repeat Password</label>
                        <input
                          type="password"
                          className="form-control mb-0 btn-border"
                          id="exampleInputPassword2"
                          placeholder="Password"
                          {...register("confirmPassword", { required: true })}
                        />
                        {errors.confirmPassword?.type === "required" && (
                          <p className="error_validation">
                            Password is required
                          </p>
                        )}
                        {validationErrors.paswordValidation ? (
                          <p className="error_validation">
                            Password must be matching
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary my-2 ml-10"
                        disabled={loader}
                      >
                        {loader ? (
                          <div class="loader">Loading...</div>
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-center links">
                    Already have an account?{" "}
                    <Link to="/account/login" className="text-primary ml-2">
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
