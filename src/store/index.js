import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { counter: state.counter + action.payload.value };
    }
    case "DECREMENT": {
      return { counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: counterReducer,
});

// const store = configureStore(counterReducer);

export default store;
