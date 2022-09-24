import { useState } from "react";
import Clock from "./components/LifecycleComponent/Clock/clock";
import DemoMount from "./components/LifecycleComponent/DemoMount/mount";
import { ListProduct } from "./components/ListProduct";
import LifeCycle from "./components/ListProduct/lifeCycle";


function App() {
  const [newState, setNewState] = useState(1);
  return (
    <div className="App">
      <ListProduct/>
      <LifeCycle name = {newState}/>
      <button onClick={() => setNewState(pre => pre + 1)}>setNewState</button>
      <Clock/>
      <DemoMount/>
      <LifeCycle/>
    </div>
  );
}

export default App;
