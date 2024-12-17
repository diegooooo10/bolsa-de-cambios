import { useContext } from "react";
import { TrendingDown, TrendingUp } from "../svg";
import { cambioContext } from "../context/CambioContext";

export const Change = () => {
  const { cambioPorcentual } = useContext(cambioContext);
  const changeClass = cambioPorcentual >= 0 ? "text-green-500" : "text-red-600";
  const changeIcon = cambioPorcentual >= 0 ? <TrendingUp /> : <TrendingDown />;

  return (
    <div className={`flex items-center justify-center ${changeClass}`}>
      <div className="mr-1">{changeIcon}</div>
      <div className="font-semibold">{cambioPorcentual}% </div>
    </div>
  );
};
