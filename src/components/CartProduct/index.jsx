import { Trash2 } from "lucide-react";

import "./CartProduct.scss";
import { useAppContext } from "../../context/AppContext";

export default function CartProduct({ product }) {
  const { deleteCartProduct } = useAppContext();

  const removeProduct = (product) => {
    deleteCartProduct(product.id);
    alert(`${product.name} удален из Корзины.`);
  };

  return (
    <div className="cart__item">
      <img src={product.imageUrl} alt={product.name} width={79} />
      <div className="item__info">
        <p>{product.name}</p>
        <b>{product.price} руб</b>
      </div>
      <button className="icon-btn" onClick={() => removeProduct(product)}>
        <Trash2 size={16} />
      </button>
    </div>
  );
}
