import "./App.css";

import UnAuthenticated from "./pages/UnAuthenticated";
import Authenticated from "./pages/authenticated";

function App() {
  localStorage.setItem("loggedIn", "xxxxxxx");

  const token = localStorage.getItem("loggedIn");

  // console.log("token", token);
  return (
    <div className='App'>{token ? <Authenticated /> : <UnAuthenticated />}</div>
  );
}

export default App;
