import { Header } from "./components/Header";
import { TableFull } from "./components/TableFull";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TransactionHistory } from "./components/TransactionHistory";
import { Portfolio } from "./components/Portfolio";
import { ReturnArrow } from "./svg";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center min-h-screen p-5 text-white bg-slate-800 md:p-14">
              <Header />
              <TableFull />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="items-center min-h-screen p-5 text-white bg-slate-800 md:p-14">
              <div className="p-2 mx-auto space-y-10 md:p-5 max-w-7xl">
                <Link to="/" className="absolute top-0 left-1">
                  <ReturnArrow />
                </Link>
                <Portfolio />
                <TransactionHistory />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
