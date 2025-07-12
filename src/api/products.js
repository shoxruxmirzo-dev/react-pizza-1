import axios from "axios";

const API_URL = "https://67f8e187094de2fe6e9f81d1.mockapi.io/products";

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
