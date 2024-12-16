export const Compra = ({ symbol, cantidad, price }) => {
  const comprar = () => {
    console.log(`Comprar ${cantidad} de ${symbol} por $${cantidad * price}`);
  };

  return (
    <button
      className="bg-blue-700 text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-800"
      onClick={comprar}
    >
      Comprar
    </button>
  );
};
