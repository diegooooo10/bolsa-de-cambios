import { TrendingDown, TrendingUp } from "../svg";

export const Change = ({ change }) => {
  const changeClass = change >= 0 ? "text-green-500" : "text-red-600";
  const changeIcon = change >= 0 ? <TrendingUp /> : <TrendingDown />;
  return (
    <div className={`flex items-center justify-center ${changeClass}`}>
      <div className="mr-1 ">{changeIcon}</div>
      <div className="font-semibold">{change}%</div>
    </div>
  );
};
