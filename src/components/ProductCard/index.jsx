import { Heart, Plus } from "lucide-react";

import "./ProductCard.scss";
import { useAppContext } from "../../context/AppContext";

export default function Card({ product }) {
  const { toggleBookmark, isBookmarked, toggleCartProduct, isCartAdded } = useAppContext();
  const bookmarked = isBookmarked(product.id);
  const cartAdded = isCartAdded(product.id);

  const addBookmark = (product) => {
    toggleBookmark(product.id);
    if (bookmarked) {
      alert(`${product.name} удален из Закладок.`);
    } else {
      alert(`${product.name} добавлен в Закладки.`);
    }
  };

  const addCart = (product) => {
    toggleCartProduct(product.id);
    if (cartAdded) {
      alert(`${product.name} уже есть в Корзине. Добавьте другой товар.`);
    } else {
      alert(`${product.name} добавлен в Корзину.`);
    }
  };

  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="favorite">
          <button className="icon-btn" onClick={() => addBookmark(product)}>
            <Heart size={16} className={bookmarked && "added-to-favorite"} />
          </button>
        </div>
        <div className="card__image">
          <img src={product.imageUrl} alt={product.name} width={177} />
        </div>
        <h5>{product.name}</h5>
        <div className="card__bottom">
          <div className="card__price">
            <span>Цена:</span>
            <b>{product.price} руб</b>
          </div>
          <button className="icon-btn" onClick={() => addCart(product)}>
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
