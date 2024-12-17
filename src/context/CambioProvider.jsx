import { cambioContext } from "./CambioContext";
import { useEffect, useState } from "react";

export const CambioProvider = ({ price, children }) => {
  const [nuevoPrecio, setNuevoPrecio] = useState(price);
  const [cambioPorcentual, setCambioPorcentual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = parseFloat((Math.random() * 1.5 + 0.3).toFixed(2));
      const precioActualizado = parseFloat(
        (nuevoPrecio * randomValue).toFixed(2)
      );

      const porcentajeCambio = (
        ((precioActualizado - nuevoPrecio) / nuevoPrecio) *
        100
      ).toFixed(2);

      setNuevoPrecio(precioActualizado);
      setCambioPorcentual(porcentajeCambio);
    }, 5000);

    return () => clearInterval(interval);
  }, [nuevoPrecio]);

  return (
    <cambioContext.Provider
      value={{ precio: nuevoPrecio.toFixed(2), cambioPorcentual }}
    >
      {children}
    </cambioContext.Provider>
  );
};
