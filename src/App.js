import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { Conteiner } from "./style";

function App() {
  return (
    <Conteiner>
      <Login />
      <Register />
    </Conteiner>
  );
}

export default App;
