import { Link,  } from "react-router-dom";
import { ReturnArrow } from "../svg";
import { TransactionHistory } from "../components/TransactionHistory";
import { Portfolio } from "../components/Portfolio";

export const Profile = () => {
  return (
    <div className="items-center min-h-screen p-5 text-white bg-slate-800 md:p-14">
      <div className="p-2 mx-auto space-y-10 md:p-5 max-w-7xl">
        <Link to="/" className="absolute top-0 left-1">
          <ReturnArrow />
        </Link>
        <Portfolio />
        <TransactionHistory />
      </div>
    </div>
  );
};
