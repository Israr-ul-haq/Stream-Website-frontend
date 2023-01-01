import axios from "../../constants/AxiosConfig";

export const get = async (body) => {
  const config = {
    headers: {
      "x-access-token": JSON.parse(sessionStorage.getItem("streamUser"))?.token,
    },
  };

  try {
    const response = await axios.get(`/admin/listUsers`, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getbyId = async (body) => {
  const config = {
    headers: {
      "x-access-token": JSON.parse(sessionStorage.getItem("streamUser"))?.token,
    },
  };

  try {
    const response = await axios.get(`/singleUser/` + body, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const deleteSomething = async (body) => {
  const config = {
    headers: {
      "x-access-token": JSON.parse(sessionStorage.getItem("streamUser"))?.token,
    },
  };
  try {
    debugger;
    const response = await axios.delete("/user/" + body, config);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UpdateUser = async (body, id) => {
  const config = {
    headers: {
      "x-access-token": JSON.parse(sessionStorage.getItem("streamUser"))?.token,
    },
  };
  try {
    const response = await axios.put(`/updateUser/${id}`, body, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
