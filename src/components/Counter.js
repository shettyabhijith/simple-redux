import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", payload: { value: 1 } });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div className="value">{counter}</div>
    </div>
  );
};

export default Counter;
