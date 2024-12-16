

export const BuyDate = () => {
  const date = new Date().toLocaleDateString()
  return <p>{date}</p>;
};
