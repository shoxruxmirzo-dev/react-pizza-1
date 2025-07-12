import React from "react";
import ContentLoader from "react-content-loader";

import "../ProductCard/ProductCard.scss";

const ProductLoader = () => (
  <div className="card__wrapper">
    <ContentLoader
      speed={2}
      width={220}
      height={330}
      viewBox="0 0 220 330"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="21" y="20" rx="10" ry="10" width="178" height="150" />
      <rect x="21" y="190" rx="5" ry="5" width="178" height="18" />
      <rect x="21" y="215" rx="5" ry="5" width="100" height="18" />
      <rect x="21" y="260" rx="5" ry="5" width="100" height="36" />
      <rect x="160" y="260" rx="5" ry="5" width="40" height="36" />
    </ContentLoader>
  </div>
);

export default ProductLoader;
