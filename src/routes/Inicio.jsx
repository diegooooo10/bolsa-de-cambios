import { Header } from "../components/Header";
import { TableFull } from "../components/TableFull";

export const Inicio = () => {
  return (
    
    <div className="flex flex-col items-center min-h-screen p-5 text-white bg-slate-800 md:p-14">
      <Header />
      <TableFull />
    </div>
  );
};
