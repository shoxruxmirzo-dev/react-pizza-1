import axios from "axios";

const CART_PRODUCTS_URL = "https://686b4b14e559eba90871fd6a.mockapi.io/cart-products";

export const fetchCartProducts = async () => {
  const response = await axios.get(CART_PRODUCTS_URL);
  return response.data;
};

export const addCartProducts = async (productId) => {
  const response = await axios.post(CART_PRODUCTS_URL, { productId });
  return response.data;
};

export const removeCartProduct = async (id) => {
  const response = await axios.delete(`${CART_PRODUCTS_URL}/${id}`);
  return response.data;
};

export const clearCartProducts = async (cartProducts) => {
  const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

  for (let i = 0; i < cartProducts.length; i++) {
    await axios.delete(`${CART_PRODUCTS_URL}/${cartProducts[i].id}`);
    await delay();
  }
};
