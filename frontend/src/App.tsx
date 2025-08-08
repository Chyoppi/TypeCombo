import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./scenes/mainMenuscreen";
import GameScreen from "./scenes/gameplayScreen";
import AfterGame from "./scenes/endScreen";
import Header from "./components/topHeader";

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
