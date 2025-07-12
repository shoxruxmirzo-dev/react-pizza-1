import { createContext, useContext, useState, useEffect } from "react";

import { fetchProducts } from "../api/products";
import { fetchBookmarks, addBookmark, removeBookmark } from "../api/bookmarks";
import {
  fetchCartProducts,
  addCartProducts,
  removeCartProduct,
  clearCartProducts,
} from "../api/cartProducts";
import { fetchOrders, addOrders } from "../api/orders";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [productData, bookmarkData, cartProductsData, ordersData] = await Promise.all([
        fetchProducts(),
        fetchBookmarks(),
        fetchCartProducts(),
        fetchOrders(),
      ]);
      setProducts(productData);
      setBookmarks(bookmarkData);
      setCartProducts(cartProductsData);
      setOrders(ordersData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (isCartOpen) {
    document.body.classList.add("remove-scroll");
  } else {
    document.body.classList.remove("remove-scroll");
  }

  const toggleBookmark = async (productId) => {
    const existing = bookmarks.find((b) => b.productId === productId);
    if (existing) {
      await removeBookmark(existing.id);
      setBookmarks(bookmarks.filter((b) => b.id !== existing.id));
    } else {
      const newBookmark = await addBookmark(productId);
      setBookmarks([...bookmarks, newBookmark]);
    }
  };

  const isBookmarked = (productId) => bookmarks.some((b) => b.productId === productId);

  const toggleCartProduct = async (productId) => {
    const existing = cartProducts.find((cP) => cP.productId === productId);
    if (existing) {
      return;
    } else {
      const newCartProduct = await addCartProducts(productId);
      setCartProducts([...cartProducts, newCartProduct]);
    }
  };

  const isCartAdded = (productId) => cartProducts.some((cP) => cP.productId === productId);

  const deleteCartProduct = async (productId) => {
    const existing = cartProducts.find((cP) => cP.productId === productId);
    if (existing) {
      await removeCartProduct(existing.id);
      setCartProducts(cartProducts.filter((cP) => cP.id !== existing.id));
    }
  };

  const clearAllCartProducts = async (cartProducts) => {
    await clearCartProducts(cartProducts);
    setCartProducts([]);
  };

  const addToOrders = async (cartProducts) => {
    const newOrder = await addOrders(cartProducts);
    setOrders([...orders, newOrder]);
    return newOrder;
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    products,
    bookmarks,
    cartProducts,
    setCartProducts,
    searchValue,
    setSearchValue,
    setLoading,
    loading,
    toggleBookmark,
    isBookmarked,
    toggleCartProduct,
    isCartAdded,
    deleteCartProduct,
    clearAllCartProducts,
    addToOrders,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
