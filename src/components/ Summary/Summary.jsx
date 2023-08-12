import React, { useContext } from "react";
import { CgMathMinus } from "react-icons/cg";
import { PiDivideThin } from "react-icons/pi";
import "./Summary.css";
import AppContext from "../../context/AppContext";

const Summary = () => {
  const { state, ventasTotales, gastos, calcInvest } = useContext(AppContext);

  const invest = calcInvest().investUsdt;
  const ventasSuggest = ventasTotales(state).total;
  const ventasUser = ventasTotales(state).totalV1;
  const utilidadSuggest = ventasSuggest - (gastos + invest);
  const utilidadUser = ventasUser - (gastos + invest);

  const resultados = [
    {
      titulo: "el precio sugerido",
      ventasTotales: ventasSuggest,
      gastos: gastos,
      inversion: invest,
      utilidad: utilidadSuggest,
      margen: (utilidadSuggest / ventasSuggest) * 100,
    },
    {
      titulo: "el precio impuesto jose",
      ventasTotales: ventasUser,
      gastos: gastos,
      inversion: invest,
      utilidad: utilidadUser,
      margen: (utilidadUser / ventasUser) * 100,
    },
  ];

  return (
    <div className="summary">
      {resultados.map((result, index) => {
        return (
          <div className="finance" key={index}>
            <h2>Aplicando {result.titulo} </h2>
            <p className="title-income">Ingreso neto</p>
            <div className="calc-resta">
              <CgMathMinus className="operator" />
              <p>Ventas totales: ${result.ventasTotales.toFixed(2)}</p>
              <span>(Gastos: ${result.gastos}</span>
              <span>+</span>
              <span>Inversion: ${result.inversion.toFixed(2)})</span>
            </div>
            <p className="resultado">
              Mis ganancias: ${result.utilidad.toFixed(2)}
            </p>
            <p className="title-income">Utilidad operacional</p>
            <p className="resultado">
              Tu Utilidad operacional es igual a ingreso neto: $
              {result.utilidad.toFixed(2)}" debido a que no se paga empleados
            </p>
            <p className="title-income">Margen operacional</p>
            <div className="calc-resta">
              <PiDivideThin className="operator" />
              <p>Utilidad operacional: ${result.utilidad.toFixed(2)}</p>
              <span>ventas totales ${result.ventasTotales.toFixed(2)}</span>
            </div>
            <p className="resultado">Margen: %{result.margen.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
