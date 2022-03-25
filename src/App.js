import './App.css';
import TodoList from "./pages/TodoList";
import {TodoThemeProvider} from "./context/ThemeContext";

function App() {
  return (
    <TodoThemeProvider>
      <TodoList />
    </TodoThemeProvider>
  );
}

export default App;
