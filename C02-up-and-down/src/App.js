import "./components/ClassComponent";
import ClassComponent from "./components/ClassComponent";
import UpAndDown from "./components/UpAndDown";
import MilkComponet from "./components/MilkComponent";
import { products } from "./data/mockdata";
import { useState } from "react";
function App() {
  const value = {
    title: "Register Account",
    inputValue: {
      email: "Email",
      password: "Password",
      confirm: "Password confirm",
    },
  };
  const [list,setList] = useState(products)
  const handleDelete = (id) => {
    const newList = list.filter((value) => value.id !== id )
    setList(newList)
  }
  return (
    <div className="App">
      <ClassComponent title={value.title} inputValue={value.inputValue} />
      <UpAndDown />
      {list.map((item, index, arr) => 
        <MilkComponet
          title={item.name}
          src={item.image}
          price={item.price}
          content={item.desc}
          id= {item.id}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
