import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StartPage } from "./pages/startPage/StartPage";
import { GamePage } from "./pages/gamePage/GamePage";
import { ResultPage } from "./pages/resultPage/ResultPage";

 const App = () => ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/play" element={<GamePage />} />
      <Route path="/results" element={<ResultPage />} />
    </Routes>
  </BrowserRouter> 
);

export default App