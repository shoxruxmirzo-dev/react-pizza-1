import "./BookmarksContent.scss";
import ProductCard from "../ProductCard";

import { useAppContext } from "../../context/AppContext";

export default function BookmarksContent() {
  const { products, bookmarks } = useAppContext();

  const bookmarkedProducts = products.filter((product) =>
    bookmarks.some((b) => b.productId === product.id)
  );

  return (
    <section id="content" className="content">
      <div className="container-wrapper">
        <div className="content__top">
          <h1>Мои закладки</h1>
        </div>
        <div className="cards">
          {bookmarkedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
