import { CircleUserRound, Heart, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import "./Header.scss";
import { useAppContext } from "../../context/AppContext";

export default function Header() {
  const { setIsCartOpen, cartProducts } = useAppContext();
  return (
    <header>
      <div className="container-wrapper">
        <Link to="/" className="nav-logo">
          <img src="logo.png" alt="Logo icon" width={40} height={40} />
          <div className="logo__info">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="desktop-menu">
          <div className="cart" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={18} />
            <button>{cartProducts.length}</button>
            <span>Корзина</span>
          </div>
          <Link to="/favorites">
            <Heart size={18} />
            <span>Закладки</span>
          </Link>
          <div>
            <CircleUserRound size={18} />
            <span>Профиль</span>
          </div>
        </div>
      </div>
    </header>
  );
}
