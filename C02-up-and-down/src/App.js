import "./components/ClassComponent"
import ClassComponent from "./components/ClassComponent";
import UpAndDown from "./components/UpAndDown";
function App() {
  const value = {
    title: "Register Account",
    inputValue: {
      email: "Email",
      password: "Password",
      confirm: "Password confirm"
    }
  };
  return (
    <div className="App">
      < ClassComponent
        title= {value.title}
        inputValue= {value.inputValue}
      />
      < UpAndDown/>
    </div>
  );
}

export default App;
