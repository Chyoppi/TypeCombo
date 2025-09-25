import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/topHeader";
import DailyScreen from "./pages/gameplay/dailychallengeScreen";
import GameScreen from "./pages/gameplay/gameplayScreen";
import { DailyAfterGame } from "./pages/leaderboards/dailyEndScreen";
import { NormalAfterGame } from "./pages/leaderboards/normalEndScreen";
import MainMenu from "./pages/mainmenu/mainMenuscreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/daily" element={<DailyScreen />} />
        <Route path="/normalafter" element={<NormalAfterGame />} />
        <Route path="/dailyafter" element={<DailyAfterGame />} />
      </Routes>
    </Router>
  );
}

export default App;
