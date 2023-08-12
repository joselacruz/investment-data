import React, { useContext, useEffect } from "react";
// import { useMyContext } from "../../hooks/useMyContext";
import ProductCard from "../ProductCard/ProductCard";
import AppContext from "../../context/AppContext";
import "./ContainerProducts.css";

const ContainerProducts = () => {
  //   const { state } = useMyContext();
  const { state, calcInvest, amountProducts } =
    useContext(AppContext);

  const moneyInvest = calcInvest ();
  const quantityOfProducts = amountProducts();


  return (
    <div className="container-products">
      <div className="product-about">
        <h2>Has adquirido {quantityOfProducts.total} artículos</h2>
        <p>
          Uso comercial: {quantityOfProducts.totalForSale}
          <span className="product-recognize white"> </span>
        </p>
        <p>
          Uso personal: {quantityOfProducts.totalNotForSale}
          <span className="product-recognize mint"> </span>
        </p>
       <div className="about-invest">
       <p> inversionGc: $ <b>{moneyInvest.invest.toFixed(2)}</b></p>
       <p>inversionUsdt: $ <b>{moneyInvest.investUsdt.toFixed(2)}</b></p>
       </div>


      </div>
      <div className="product-grid">
        {state.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ContainerProducts;
