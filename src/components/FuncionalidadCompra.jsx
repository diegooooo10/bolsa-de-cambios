import { useState } from "react";
import { Cantidad } from "./Cantidad";
import { Compra } from "./Compra";
import { Venta } from "./Venta";



export const FuncionalidadCompra = ({ symbol, price }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleCantidadChange = (nuevaCantidad) => {
    setCantidad(nuevaCantidad);
  };
  return (
    <div className="flex justify-center space-x-5">
      <Cantidad price={price} onCantidadChange={handleCantidadChange} />
      <Compra symbol={symbol} price={price} cantidad={cantidad} />
      <Venta symbol={symbol} price={price} cantidad={cantidad} />
    </div>
  );
};
