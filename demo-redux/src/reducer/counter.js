const initState = 1
function CounterReducer(state = initState, action) {
    switch (action.type) {
        case "PLUS": 
            return state + 1;
        case "MINIUS": 
            return state - 1;
        default: 
            return state
    }
}
export default CounterReducer;