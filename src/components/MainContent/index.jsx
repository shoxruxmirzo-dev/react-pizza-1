import { Search } from "lucide-react";

import "./MainContent.scss";
import ProductCard from "../ProductCard";
import ProductLoader from "../ProductLoader";

import { useAppContext } from "../../context/AppContext";

export default function MainContent() {
  const { products, searchValue, setSearchValue, loading } = useAppContext();

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section id="content" className="content">
      <div className="container-wrapper">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="search__block">
            <Search size={16} />
            <input
              type="text"
              placeholder="Поиск..."
              onChange={onChangeSearchInput}
              value={searchValue}
            />
          </div>
        </div>
        <div className="cards">
          {loading
            ? [...Array(8)].map((_, index) => <ProductLoader key={index} />)
            : products
                .filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((product) => <ProductCard key={product.productId} product={product} />)}
        </div>
      </div>
    </section>
  );
}
