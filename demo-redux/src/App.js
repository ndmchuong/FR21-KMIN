import { useDispatch, useSelector } from "react-redux";
import { Plus } from "./action/counter";


function App() {
  const counter = useSelector(state => state.counter);
  const list = useSelector(state => state.list);
  console.log(list);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {counter}
      <button onClick={() => {
        const action = Plus(1);
        dispatch(action);
        // dispatch({
        //   type: "PLUS"
        // })
      }}>ADD</button>
      <button onClick={() => {
        dispatch({
          type: "MINIUS"
        })
      }}>MINIUS</button>
    </div>
  );
}

export default App;
