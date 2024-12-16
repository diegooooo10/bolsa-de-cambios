import { Link } from "react-router-dom";
import { Cash } from "../svg";
import { CustomDate } from "./CustomDate";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col md:flex-row">
        <Cash />
        <h1 className="text-2xl font-bold">Stock Market</h1>
      </div>
      <div className="space-y-2 text-right">
        <div className="text-right">
          <Link
            to="/profile"
            className="p-2 transition-all duration-300 border rounded-md bg-slate-800 text-gray-50 border-slate-600 hover:bg-slate-700 "
          >
            Cuenta
          </Link>
        </div>
        <div className="grid text-right">
          <p className="text-sm">Dinero total:</p>
          <p className="text-sm text-gray-400 md:text-base">$12213</p>
        </div>
        <div className="text-right">
          <p className="text-sm ">Última actualización:</p>
          <div>
            <CustomDate />
          </div>
        </div>
      </div>
    </div>
  );
};
