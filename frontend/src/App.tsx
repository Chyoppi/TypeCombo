import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/topHeader";
import AfterGame from "./scenes/endScreen";
import GameScreen from "./scenes/gameplayScreen";
import MainMenu from "./scenes/mainMenuscreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/aftergame" element={<AfterGame />} />
      </Routes>
    </Router>
  );
}

export default App;
