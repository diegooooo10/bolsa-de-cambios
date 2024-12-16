import { BuyDate } from "./BuyDate";

export const TransactionHistory = () => {
  return (
    <article className="m-4 p-[1px] bg-slate-800 border border-slate-700 rounded-md">
      <section className="overflow-x-auto">
        <table className="w-full overflow-x-scroll text-center table-auto bg-slate-800">
          <thead>
            <tr className="text-sm text-center text-gray-200 uppercase bg-slate-800">
              <th className="px-6 py-3 text-left">Tipo</th>
              <th className="px-6 py-3">Symbol</th>
              <th className="px-6 py-3">Acciones</th>
              <th className="px-6 py-3">Precio</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Fecha</th>
            </tr>
          </thead>
          <tbody className="text-sm text-white border-y border-y-slate-700">
            <tr>
              <td className="px-6 py-3 text-left">Vendido</td>
              <td className="px-6 py-3">APPL</td>
              <td className="px-6 py-3">233</td>
              <td className="px-6 py-3">$12348</td>
              <td className="px-6 py-3">$218309</td>
              <td>
                <BuyDate />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
};
