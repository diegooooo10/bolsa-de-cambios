import { Pig, TrendingUp2, Wallet } from "../svg";

export const Portfolio = () => {
  return (
    <>
      <h1 className="my-8 text-3xl font-bold text-center">Bolsa</h1>
      <section className="grid p-5 mx-auto space-y-5 text-left rounded-md md:grid-cols-3 md:space-y-0">
        <article className="w-full p-5 rounded-md shadow-md bg-blue-50">
          <div className="flex font-semibold text-gray-600">
            <Wallet />
            <p className="text-sm">Saldo disponible</p>
          </div>
          <p className="text-2xl font-bold text-blue-600">$15,000.00</p>
        </article>
        <article className="w-full p-5 mx-3 rounded-md shadow-md bg-green-50 md:w-auto">
          <div className="flex font-semibold text-gray-600">
            <Pig />
            <p className="text-sm">Valor de la cartera</p>
          </div>
          <p className="text-2xl font-bold text-green-600">$15,000.00</p>
        </article>
        <article className="w-full p-5 rounded-md shadow-md bg-purple-50 ">
          <div className="flex font-semibold text-gray-600">
            <TrendingUp2 />
            <p className="text-sm">Beneficio total</p>
          </div>
          <p className="text-2xl font-bold text-purple-600">$15,000.00</p>
        </article>
      </section>
    </>
  );
};
