
import "./App.css";
import ThemeContext from "./Components/ContextWrapper/ThemeContext";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <ThemeContext>
        <Home></Home>
      </ThemeContext>
    </div>
  );
}

export default App;
