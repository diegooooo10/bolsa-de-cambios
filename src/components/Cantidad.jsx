export const Cantidad = ({ onCantidadChange, symbol }) => {
  const handleCantidadChange = (e) => {
    const nuevaCantidad = parseFloat(e.target.value) || 0;
    if (nuevaCantidad <= 0) {
      return;
    }
    onCantidadChange(nuevaCantidad);
  };

  return (
    <>
      <label htmlFor={symbol}>
        <input
          type="number"
          className="px-2 py-1 text-white bg-gray-700 border border-gray-600 rounded-lg w-28 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Qty"
          min={1}
          id={symbol}
          onChange={handleCantidadChange}
        />
      </label>
    </>
  );
};
