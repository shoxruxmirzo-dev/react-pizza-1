import { useState } from "react";
import { X } from "lucide-react";

import "./Drawer.scss";
import CartProduct from "../CartProduct";
import EmptyInfo from "../EmptyInfo";
import { useAppContext } from "../../context/AppContext";

export default function Drawer() {
  const {
    setIsCartOpen,
    products,
    cartProducts,
    loading,
    setLoading,
    clearAllCartProducts,
    addToOrders,
  } = useAppContext();

  const [orderId, setOrderId] = useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const cartAddedProducts = products.filter((product) =>
    cartProducts.some((cP) => cP.productId === product.id)
  );

  const totalPrice = cartAddedProducts.reduce((sum, cP) => cP.price + sum, 0);

  const onClickToOrders = async () => {
    setLoading(true);
    const data = await addToOrders(cartAddedProducts);
    setOrderId(data.id);
    setIsOrderCompleted(true);
    clearAllCartProducts(cartProducts);
    setLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>
        <button className="icon-btn close-cart-btn" onClick={() => setIsCartOpen(false)}>
          <X size={16} />
        </button>

        {cartAddedProducts.length > 0 ? (
          <>
            <div className="cart__items">
              {cartAddedProducts.map((product) => (
                <CartProduct key={product.productId} product={product} />
              ))}
            </div>

            <div className="total__block">
              <div className="price__block">
                <span>Итого:</span>
                <div></div>
                <b>{totalPrice} руб</b>
              </div>
              <div className="price__block">
                <span>Налог 5%:</span>
                <div></div>
                <b>{(totalPrice / 100) * 5} руб</b>
              </div>

              <button className="order-btn" onClick={onClickToOrders} disabled={loading}>
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <EmptyInfo
            title={isOrderCompleted ? "Заказ офомлен!" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            imageUrl={isOrderCompleted ? "/img/complete-order.jpg" : "/img/cart-empty.jpg"}
          />
        )}
      </div>
    </div>
  );
}
