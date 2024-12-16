//import { CambioValores } from "./CambioValores";
import { Change } from "./Change";
import { FuncionalidadCompra } from "./FuncionalidadCompra";

export const Table = ({symbol, name, price, change, volume, marketCap}) => {
  return (
    <tr className="border-y border-slate-700">
      <td className="flex flex-col justify-center px-6 py-5 text-left">
        <span className="font-bold text-white">{symbol}</span>
        <span className="text-gray-300">{name}</span>
      </td>
      <td className="text-gray-300">
        ${price}
      </td>

      <td>
        <Change change={change} />
      </td>
      <td className="text-gray-300">${volume}</td>
      <td className="text-gray-300">{marketCap}</td>
      <td className="">
        <FuncionalidadCompra symbol={symbol} price={price} />
      </td>
    </tr>
  );
};
