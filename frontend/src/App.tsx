import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./scenes/mainMenuscreen";
import GameScreen from "./scenes/gameplayScreen";
import RegisterForm from "./scenes/registerForm";
import AfterGame from "./scenes/endScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/aftergame" element={<AfterGame />} />
      </Routes>
    </Router>
  );
}

export default App;
