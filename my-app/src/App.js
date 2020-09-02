import React from "react";

import Global from "./styles/global";

import LojaForm from "./pages/loja";

import ReactDOM from "react-dom";


import prod1 from "./assets/prod1.jpeg";
import prod2 from "./assets/prod2.jpeg";
import prod3 from "./assets/prod3.jpeg";
import prod4 from "./assets/prod4.jpeg";
import prod5 from "./assets/prod5.jpeg";
import prod6 from "./assets/prod6.jpeg";
import prod7 from "./assets/prod7.jpeg";
import prod8 from "./assets/prod8.jpeg";

const data = [
  {
    photo: prod1,
    name: "AirPods Apple Fones de ouvido",
    preco: 1499.0,
    preco2: 124.92,
    preco3: 1349.0,
  },
  {
    photo: prod2,
    name: "Capa de Silicone para Iphone 8/7",
    preco: 299.0,
    preco2: 24.92,
    preco3: 269.1,
  },
  {
    photo: prod3,
    name: "Apple Pencil",
    preco: 729.0,
    preco2: 60.75,
    preco3: 656.1,
  },
  {
    photo: prod4,
    name: "Magic Mouse 2 - Prateado",
    preco: 549.0,
    preco2: 45.75,
    preco3: 494.0,
  },
  {
    photo: prod5,
    name: "Caixa prateada de alumínio com pulseira esportiva branca",
    preco: 2899.0,
    preco2: 241.58,
    preco3: 2608.1,
  },
  {
    photo: prod6,
    name: "Cabo de lightning para USB (1m)",
    preco: 149.0,
    preco2: 12.42,
    preco3: 134.1,
  },
  {
    photo: prod7,
    name: "Smart Keyboard para Ipad Pro 12,9 polegadas - inglês (EUA)",
    preco: 1099.0,
    preco2: 91.58,
    preco3: 989.1,
  },
  {
    photo: prod8,
    name: "Carregador USB de 5W Apple",
    preco: 149.0,
    preco2: 12.42,
    preco3: 134.1,
  },
];

function App() {
  return (
    <>
     
        <Global />
        <LojaForm cardData={data} />
      
    </>
  );
}

export default App;
