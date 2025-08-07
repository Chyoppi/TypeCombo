import MainMenu from "./scenes/MainMenu";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-4">
      <h1 className="text-4xl font-bold">Typeracer Game</h1>
      <MainMenu />
    </div>
  );
}

export default App;
