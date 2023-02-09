import { createSlice } from "@reduxjs/toolkit";

const initState = { value: 0, showCounter: true };

// we need to store the returned value of createSlice function
const counterSlice = createSlice({
  // the unique name of the slice as we can have as many slices as we want in an applications.
  name: "counter",
  // this below is the initial state which will be a blueprint for the further states.
  initialState: initState,
  // this is the object for the reducers which may contain as many reducers as we want.
  reducers: {
    // this is for incrementing the counter state.
    increment(state) {
      // over here we can use the state mutating logic
      // bacause redux toolkit used IMMER package to manage the state and avoid mutability  of the
      // current state but as a dev we get a pseudo feeling that we are mutating the state
      // but what ever state we mutate IMMER atlast also takes care of the current state
      // and handles the task of returning brand new state everytime we mutate any state.
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    // when ever we want some extra data as a param to the reducer function
    // we use the action param and redux toolkit passes that extra data
    // inside the action param.
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;