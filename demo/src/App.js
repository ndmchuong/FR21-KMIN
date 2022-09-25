import { LogIn } from "./components/LogIn";
import Nameform from "./components/NameForm";


function App() {
  return (
    <div className="App">
      <LogIn IsLogin = {true} note = "khi gia tri la true"/>
      <LogIn IsLogin = {false} note = "khi gia tri la false"/>
      <Nameform/>
    </div>
  );
}

export default App;
