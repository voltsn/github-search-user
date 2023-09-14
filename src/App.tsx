import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="mx-auto flex w-[90%] max-w-[730px] flex-col items-center justify-center border-2 border-orange-700">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
