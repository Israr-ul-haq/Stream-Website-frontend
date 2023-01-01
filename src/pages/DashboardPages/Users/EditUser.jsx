import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getbyId,
  UpdateUser,
} from "../../../services/DashbaordServices/UserService";

function EditUser() {
  const { id } = useParams();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const [loader, setLoader] = useState();
  const [validationErrors, setValidationErrors] = useState({
    paswordValidation: false,
    emailValidation: false,
  });

  //UseEffect
  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  const [data, setData] = useState();

  const getData = async () => {
    const response = await getbyId(id);
    debugger;
    if (response.status === 200) {
      setData(response.data);
      reset(response.data);
    } else {
      toast.error(response?.data);
    }
  };

  const navigate = useNavigate();
  const submit = async (formData) => {
    debugger;

    let pattern =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const validationErrorsCopy = { ...validationErrors };
    let validCount = 0;

    if (formData.confirmPassword !== formData.Password) {
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

    const finalData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      Password: formData.Password,
    };
    const response = await UpdateUser(finalData, id);
    if (response.status === 201) {
      toast.success(response?.data?.message);
      setTimeout(() => {
        navigate("/users");
      }, 0);
      setLoader(false);
    } else {
      toast.error(response?.data?.message);
      setLoader(false);
    }
  };
  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Edit User</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <form action="movie-list.html" onSubmit={handleSubmit(submit)}>
                  <div className="row">
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
                        disabled
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
                        {...register("Password", { required: true })}
                      />
                      {errors.password?.type === "required" && (
                        <p className="error_validation">Password is required</p>
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
                        <p className="error_validation">Password is required</p>
                      )}
                      {validationErrors.paswordValidation ? (
                        <p className="error_validation">
                          Password must be matching
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 form-group ">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <button type="reset" className="btn btn-danger">
                        cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
