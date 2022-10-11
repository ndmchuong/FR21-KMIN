
import { Route, Routes, Link } from "react-router-dom";
import { LogIn } from "./components/LogIn";
import Nameform, { FormFunction } from "./components/NameForm";
import { About } from "./components/Router/About";
import { Contact } from "./components/Router/Contact";
import { Home } from "./components/Router/Home";
import { NotFound } from "./components/Router/NotFound";


function App() {
  
  return (
    // <div className="App">
    //   <LogIn IsLogin = {true} note = "khi gia tri la true"/>
    //   <LogIn IsLogin = {false} note = "khi gia tri la false"/>
    //   <FormFunction/>
    // </div>
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Contact/:id" element={<Contact/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
