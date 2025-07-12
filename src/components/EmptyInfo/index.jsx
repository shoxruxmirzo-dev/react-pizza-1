import { ArrowLeft } from "lucide-react";
import "./EmptyInfo.scss";
import { useAppContext } from "../../context/AppContext";

export default function EmptyInfo(empty) {
  const { setIsCartOpen } = useAppContext();
  return (
    <>
      <div className="cart-empty">
        <img src={empty.imageUrl} alt="Cart empty image" height={120} />
        <h2>{empty.title}</h2>
        <p>{empty.description}</p>
      </div>
      <button className="order-btn" onClick={() => setIsCartOpen(false)}>
        <ArrowLeft />
        Вернуться назад
      </button>
    </>
  );
}
