import axios from "axios";

const ORDERS_URL = "https://686b4b14e559eba90871fd6a.mockapi.io/orders";

export const fetchOrders = async () => {
  const response = await axios.get(ORDERS_URL);
  return response.data;
};

export const addOrders = async (cartProducts) => {
  const response = await axios.post(ORDERS_URL, { products: cartProducts });
  return response.data;
};
