import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StartPage } from "./pages/startPage/StartPage";
import { GamePage } from "./pages/gamePage/GamePage";
import { Registration } from "./pages/RegistrationPage/Registration";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/Play" element={<GamePage />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);

export default App;
