import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Baquetas de tambor con punta de madera 5As",
    image: "https://m.media-amazon.com/images/I/51csSGxCa2L._AC_SX425_.jpg",
    price: 5.9,
    link: "https://www.amazon.com/gp/product/B06XGS3ZD3/",
    cantidad: 1,
    priceV1: 0,
    useForSell: false,
  },
  {
    id: 2,
    title:
      "Estéreo de coche Android de doble DIN, 10 pulgadas, vertical, horizontal, giratoria, pantalla",
    image: "https://m.media-amazon.com/images/I/61WxoKFjJCL._AC_SX425_.jpg",
    price: 59.99,
    link: "https://www.amazon.com/dp/B09ZLFZM2X",
    cantidad: 1,
    priceV1: 130,
    useForSell: true,
  },
  {
    id: 3,
    title: "Proyector inteligente con sistema Android 4K",
    image: "https://m.media-amazon.com/images/I/71gu+dBKGxL._AC_SX425_.jpg",
    price: 67.92,
    link: "https://www.amazon.com/dp/B0BDQYK9ZT",
    cantidad: 1,
    priceV1: 110,
    useForSell: true,
  },
  {
    id: 4,
    title:
      "SIXWIN Estéreo de coche Android 11.0 para VW Volkswagen Passat 2019 con pantalla táctil de 10.1",
    image: "https://m.media-amazon.com/images/I/61TRrMwhwPL._AC_SX425_.jpg",
    price: 48.99,
    link: "https://www.amazon.com/dp/B0BBMV3LX9",
    cantidad: 1,
    priceV1: 110,
    useForSell: true,
  },
  {
    id: 5,
    title: "Estéreo de coche doble DIN de 9 pulgadas Android 11",
    image: "https://m.media-amazon.com/images/I/71BfUWBg+9L._AC_SX425_.jpg",
    price: 39.99,
    link: "https://www.amazon.com/dp/B0B9N1MM1Y",
    cantidad: 3,
    priceV1: 110,
    useForSell: true,
  },
  {
    id: 6,
    title:
      "Lentes de bloqueo de luz azul para mujeres y hombres, anteojos de tensión ocular para computadora",
    image: "https://m.media-amazon.com/images/I/71ttN6Q4xwL._AC_UX679_.jpg",
    price: 3.99,
    link: "https://www.amazon.com/dp/B09QSW2GRN",
    cantidad: 1,
    priceV1: 0,
    useForSell: false,
  },
  {
    id: 7,
    title: "Mini timbre inalámbrico impermeable ",
    image: "https://m.media-amazon.com/images/I/51hg6upyR3L._AC_SY450_.jpg",
    price: 11.19,
    link: "https://www.amazon.com/dp/B09N71MFPF",
    cantidad: 2,
    priceV1: 22,
    useForSell: true,
  },
  {
    id: 8,
    title:
      "Centrum Gomitas multivitamínicas para mujer, sabores de frutas tropicales hechas de sabores naturales, 150 unidades",
    image: "https://m.media-amazon.com/images/I/71XS2e6YDKL._AC_SX679_.jpg",
    price: 7.5,
    link: "https://www.amazon.com/dp/B09SPN7JQH",
    cantidad: 1,
    priceV1: 16,
    useForSell: true,
  },
  {
    id: 9,
    title: "Radio de coche con pantalla tactil de 5 pulgadas",
    image: "https://m.media-amazon.com/images/I/41cgZNxDzmL._SS142_.jpg",
    price: 39.99,
    link: "https://www.amazon.com/dp/B0B93MFN7Z",
    cantidad: 1,
    priceV1: 75,
    useForSell: true,
  },
  {
    id: 10,
    title:
      "Cámara de respaldo para automóvil, cámara de retroceso HD de 4 LED con visión nocturna",
    image: "https://m.media-amazon.com/images/I/61QbwpcMQdL._AC_SX679_.jpg",
    price: 6.99,
    link: "https://www.amazon.com/-/es/gproduct/B09SFS2RKF",
    cantidad: 1,
    priceV1: 0,
    useForSell: true,
  },
  {
    id: 11,
    title:
      "REMINGTON SHINE THERAPY - Plancha de pelo con infusión de aceite de argán y queratina de 1 pulgada",
    image: "https://m.media-amazon.com/images/I/71b2w5VLExL._SX425_.jpg",
    price: 24.58,
    link: "https://www.amazon.com/-/es/gp/product/B09GKY436P",
    cantidad: 1,
    priceV1: 42,
    useForSell: true,
  },
  {
    id: 12,
    title:
      "Probador de bujías de doble agujero, probador de chispas de 0 ~ 6000 rpm",
    image: "https://m.media-amazon.com/images/I/61l3ENOvMvL._AC_SX425_.jpg",
    price: 26.09,
    link: "https://www.amazon.com/-/es/gp/product/B0B7RX7FTR",
    cantidad: 1,
    priceV1: 45,
    useForSell: true,
  },
  {
    id: 13,
    title:
      "Estéreo para automóvil de 2 DIN, 7 pulgadas 1080P HD pantalla táctil con Bluetooth, radio Android ",
    image: "https://m.media-amazon.com/images/I/617kKJTAkEL._AC_SX425_.jpg",
    price: 55.99,
    link: "https://www.amazon.com/-/es/gp/product/B0B7HT6SVS",
    cantidad: 1,
    priceV1: 110,
    useForSell: true,
  },
  {
    id: 14,
    title:
      "Cocheparts Estéreo para coche con radio Bluetooth de un solo DIN de 4.1 pulgadas",
    image: "https://m.media-amazon.com/images/I/61MhAQpwcQL._AC_SX425_.jpg",
    price: 26.09,
    link: "https://www.amazon.com/-/es/gp/product/B09NVQ8SP6",
    cantidad: 1,
    priceV1: 55,
    useForSell: true,
  },
  {
    id: 15,
    title: "Nutricost Citrato de magnesio en polvo (durazno mango, 8.82 oz)",
    image: "https://m.media-amazon.com/images/I/71TzGqWetWL._AC_SX679_.jpg",
    price: 15.95,
    link: "https://www.amazon.com/-/es/Nutricost-Citrato-magnesio-polvo-durazno/dp/B09SP4V2RM",
    cantidad: 1,
    priceV1: 0,
    useForSell: false,
  },
  {
    id: 16,
    title:
      "NOLITOY 4 ruedas de equipaje, repuesto para maleta, ruedas giratorias, pieza de reparación color negro, Negro ",
    image:
      "https://m.media-amazon.com/images/I/51jX4HyJJKL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    price: 16.69,
    link: "https://www.amazon.com/-/es/NOLITOY-equipaje-repuesto-giratorias-reparaci%C3%B3n/dp/B0BV22VH65",
    cantidad: 1,
    priceV1: 0,
    useForSell: false,
  },
  {
    id: 17,
    title:
      "Doble DIN Android 11 - Estéreo para automóvil, pantalla táctil de 7 pulgadas, radio para automóvil, Bluetooth, navegación GPS, receptor FM, conexión WiFi, enlace de espejo + cámara de respaldo [2G + 16G]",
    image: "https://m.media-amazon.com/images/I/71dsIS+NYNL._AC_SX425_.jpg",
    price: 49.99,
    link: "https://www.amazon.com/-/es/gp/product/B09L4YMVM3/",
    cantidad: 1,
    priceV1: 115,
    useForSell: true,
  },
];

const useMyContext = () => {
  const [state, setState] = useState(products);
  const [gastos, setGastos] = useState(143.53);

  //Logica para Agregar el precio Seguerido Estatico por ahora
  const newArrSuggestPrice = [...state];
  newArrSuggestPrice.forEach((product) => {
    product["suggestPrice"] = product.price / 0.7 + 6.25;
  });

  useEffect(() => {
    setState(newArrSuggestPrice);
  }, []);
  //fin

  const calcInvest = () => {
    const invest = products.reduce(
      (total, product) => total + product.price * product.cantidad,
      0
    );

    const investInUsdt = invest - invest * 0.16;
    const investUsdt = investInUsdt;

    return {
      invest,
      investUsdt,
    };
  };


  const amountProducts = () => {
    let totalForSale = 0;
    let totalNotForSale = 0;
    let total;

    products.forEach((product) => {
      if (product.useForSell) {
        totalForSale += product.cantidad;
      } else {
        totalNotForSale += product.cantidad;
      }
      total = totalForSale + totalNotForSale;
    });

    return { totalForSale, totalNotForSale, total };
  };

  const ventasTotales = (array) => {
    const filteruseForSell = array.filter(
      (product) => product.useForSell === true
    );

    //Precio sugerido en el peor escenario
    const sum = filteruseForSell.reduce(
      (total, product) => total + product.suggestPrice * product.cantidad,
      0
    );

    //con mi  precio ya impuesto
    const sumV1 = filteruseForSell.reduce(
      (total, product) => total + product.priceV1 * product.cantidad,
      0
    );
    return {
      total: sum,
      totalV1: sumV1,
    };
  };

  return {
    state,
    setState,
    calcInvest,
    ventasTotales,
    amountProducts,
    gastos,
    setGastos,
  };
};

export { useMyContext };
