import { useState } from "react";
import ClassComponent from "./components/ClassComponent";
import Clock from "./components/Clock";
import DemoMount from "./components/DemoMount";
import { FunctionComponent } from "./components/FunctionComponent";
import { KminCounter } from "./components/KminCounter";
import LifeCycle from "./components/LifeCycle";


function App() {
  const [count, setCount] = useState(1);
  const handleCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Clock/>
      <LifeCycle/>
      <DemoMount/>
      <ClassComponent title = "gioi thieu">
        My name is Chuong
      </ClassComponent>
      <FunctionComponent  title = "gioi thieu">
        Toi ten la Chương</FunctionComponent>


        <KminCounter title = "Kmin Counter" number= {count} handleCount = {handleCount}
        >
          
        </KminCounter>
    </div>
  );
}

export default App;
