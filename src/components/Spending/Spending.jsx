import React, {useContext} from "react";
import AppContext from "../../context/AppContext";
import ProductCard from "../ProductCard/ProductCard";
import './Spending.css';
const Spending = () => {
  const { state,setGastos} = useContext(AppContext);
  // gastos registrados
  const spedingsRegistred = 100;
  //Filtramos los productos Que son para uso personal
  const spendingsProducts = state.filter(item => !item.useForSell);
  //sumamos los productos Que son para uso personal
  const sumUseForSell = spendingsProducts.reduce((total,item) => total + item.price * item.cantidad,0);
  
  // setGastos(sumUseForSell);

    return (
       <div className="Spending">
         <h2>Tus gastos son: ${sumUseForSell + spedingsRegistred } </h2>
         <div className="spendings-container">
         <div className="spendings-registerd">
         <button>Registrar Gastos</button>
          <div className="registerd">
            <h2 className="registerd-title">Envio</h2>
            <p className="registerd-precio">Monto: ${spedingsRegistred}</p>
          </div>
       
         </div>
         <div className="spendings-products">
          {spendingsProducts.map(product => {
           return <ProductCard product={product} key={product.id}/>
          })}
         </div>
         
         </div>
       </div>
    );
}

export default Spending;