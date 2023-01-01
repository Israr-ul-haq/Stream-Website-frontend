import axios from "../constants/AxiosConfig";

export const login = async (body) => {
  try {
    const response = await axios.post("/login", body);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const signUp = async (body) => {
  try {
    const response = await axios.post("/add_user", body);
    return response;
  } catch (error) {
    return error.response;
  }
};
