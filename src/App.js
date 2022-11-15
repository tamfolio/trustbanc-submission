import "./App.css";

import UnAuthenticated from "./pages/UnAuthenticated";
import Authenticated from "./pages/authenticated";

function App() {

  const token = localStorage.getItem("sessionID");

  // console.log("token", token);
  return (
    <div className='App'>{token ? <Authenticated /> : <UnAuthenticated />}</div>
  );
}

export default App;
