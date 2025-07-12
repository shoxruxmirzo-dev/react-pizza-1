import axios from "axios";

const BOOKMARKS_URL = "https://67f8e187094de2fe6e9f81d1.mockapi.io/bookmarks";

export const fetchBookmarks = async () => {
  const response = await axios.get(BOOKMARKS_URL);
  return response.data;
};

export const addBookmark = async (productId) => {
  const response = await axios.post(BOOKMARKS_URL, { productId });
  return response.data;
};

export const removeBookmark = async (id) => {
  const response = await axios.delete(`${BOOKMARKS_URL}/${id}`);
  return response.data;
};
