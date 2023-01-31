import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };

createSlice({
  // the unique name of the slice as we can have as many slices as we want in an applications.
  name: "counter",
  // this below is the initial state which will be a blueprint for the further states.
  initState,
  // this is the object for the reducers which may contain as many reducers as we want.
  reducers: {
    // this is for incrementing the counter state.
    increment(state) {
      // over here we can use the state mutating logic
      // bacause redux toolkit used IMMER package to manage the state and avoid mutability  of the
      // current state but as a dev we get a pseudo feeling that we are mutating the state
      // but what ever state we mutate IMMER atlast also takes care of the current state
      // and handles the task of returning brand new state everytime we mutate any state.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // when ever we want some extra data as a param to the reducer function
    // we use the action param and redux toolkit passes that extra data
    // inside the action param.
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});



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
