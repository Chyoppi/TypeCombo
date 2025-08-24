import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/topHeader";
import GameScreen from "./pages/gameplay/gameplayScreen";
import AfterGame from "./pages/leaderboard/endScreen";
import MainMenu from "./pages/mainmenu/mainMenuscreen";

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
