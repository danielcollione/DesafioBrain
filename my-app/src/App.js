import React from "react";

import Global from "./styles/global";

import Loja from "./pages/loja";

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
    preco: 1499.00,
    preco2: 124.92,
    preco3: 1349.00
  },
  {
    photo: prod2,
    name: "Capa de Silicone para Iphone 8/7",
    preco: 299.00,
    preco2: 24.92,
    preco3: 269.10
  },
  {
    photo: prod3,
    name: "Apple Pencil",
    preco: 729.00,
    preco2: 60.75,
    preco3: 656.10
  },
  {
    photo: prod4,
    name: "Magic Mouse 2 - Prateado",
    preco: 549.00,
    preco2: 45.75,
    preco3: 494.00
  },
  {
    photo: prod5,
    name: "Caixa prateada de alumínio com pulseira esportiva branca",
    preco: 2899.00,
    preco2: 241.58,
    preco3: 2608.10
  },
  {
    photo: prod6,
    name: "Cabo de lightning para USB (1m)",
    preco: 149.00,
    preco2: 12.42,
    preco3: 134.10
  },
  {
    photo: prod7,
    name: "Smart Keyboard para Ipad Pro 12,9 polegadas - inglês (EUA)",
    preco: 1099.00,
    preco2: 91.58,
    preco3: 989.10
  },
  {
    photo: prod8,
    name: "Carregador USB de 5W Apple",
    preco: 149.00,
    preco2: 12.42,
    preco3: 134.10
  }
];

function App() {
  return (
    <>
      <Global />
      <Loja cardData={data} />
    </>
  );
}

export default App;