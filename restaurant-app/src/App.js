
import "../src/main.scss";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Feature/>
      <Menu/>
    </div>
  );
}

export default App;
