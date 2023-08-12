import React, { useContext } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const truncatedTitle =
    product.title.length > 20
      ? product.title.slice(0, 60) + "..."
      : product.title;
  const priceSuggest = product.suggestPrice?.toFixed(2);

  return (
    <div
      className={
        product.useForSell ? "ProductCard" : "ProductCard card-ForSell"
      }
    >
      <div className="product-image">
        <img src={product.image} alt={product.image} />
      </div>
      <div className="product-quantity">
        <span className="quantity-text">{product?.cantidad}</span>
      </div>
      <h2 className="product-title">{truncatedTitle}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-price-suggested price-suggested">
        Precio Sugerido ${priceSuggest}
      </p>
      <p
        className="product-price-suggested price-suggested-user"
        style={{ fontWeight: "bold" }}
      >
        by Jc ${product.priceV1}
      </p>
      <a
        href="https://www.amazon.com/-/es/gp/product/B09NVQ8SP6"
        className="product-link"
      >
        Ver en Amazon
      </a>
    </div>
  );
};

export default ProductCard;
