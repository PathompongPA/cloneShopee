import "../assets/css/Content.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../App";

export default function Content() {
  const { state, dispatch } = useContext(SomeDate);

  useEffect(() => {
    console.log(state.product);
    console.log(state.product.length);
  }, [state]);

  return (
    <div id="boxContent" className="boxComponent h100">
      <div id="boxSubContent">
        <button
          onClick={() => {
            dispatch({ type: "decrease" });
            console.log(state);
          }}
        >
          -
        </button>
        <h1 id="countItem">{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increase" });
            console.log(state);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "test",
              payload: {
                id: state.product[state.product.length - 1].id + 1,
                name: "pathompong",
                quantity: 0,
              },
            });
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
