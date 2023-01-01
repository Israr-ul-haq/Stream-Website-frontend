import axios from "../../constants/AxiosConfig";

export const paymentIntent = async (body) => {
  try {
    debugger;
    const response = await axios.post("/create-payment-intent", body);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const paymentCardIntent = async (body) => {
  try {
    debugger;
    const response = await axios.get(`/get-secret/${body}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
