import { Inicio } from "./routes/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./routes/Profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
