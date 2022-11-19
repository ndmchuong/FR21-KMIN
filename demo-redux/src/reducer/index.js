import { combineReducers } from "redux";
import CounterReducer from "./counter";
import { List } from "./list";


const rootReduce = combineReducers({
    counter: CounterReducer,
    list: List
});
export default rootReduce