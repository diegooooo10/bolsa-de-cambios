
export const CustomDate = () => {
  const currentDate = new Date();
  return <div className="text-sm md:text-base text-gray-400">{currentDate.toLocaleString()}</div>;
};


