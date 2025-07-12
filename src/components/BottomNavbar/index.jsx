import { CircleUserRound, Heart, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import "./BottomNavbar.scss";

export default function BottomNavbar() {
  return (
    <navbar className="bottom-navbar">
      <div className="container-wrapper">
        <ul className="bottom-links">
          <li className="link">
            <Link to="/">
              <span>Главная</span>
            </Link>
          </li>
          <li className="link">
            <Link to="/cart-items">
              <ShoppingCart size={18} />
              <span>Корзина</span>
            </Link>
          </li>
          <li className="link">
            <Link to="/favorites">
              <Heart size={18} />
              <span>Закладки</span>
            </Link>
          </li>
          <li className="link">
            <Link to="/">
              <CircleUserRound size={18} />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
}
