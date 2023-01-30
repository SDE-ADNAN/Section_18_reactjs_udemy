import { createStore } from "redux";
// import {createStore} from "redux"


const initState = { counter: 0, showCounter: true };
const counterReducer = (state = initState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
      //   showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
      //   showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
      //   showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      //   counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;


