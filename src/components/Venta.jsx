export const Venta = ({ symbol, price, cantidad }) => {
  const vender = () => {
    console.log(`Vender ${cantidad} de ${symbol} por $${cantidad * price}`);
  };

  return (
    <button
      className="px-5 py-2 font-bold text-white bg-red-700 rounded-lg hover:bg-red-800"
      onClick={vender}
    >
      Vender
    </button>
  );
};
