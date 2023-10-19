import "./product.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import GetApi from "../../initails/GetApi";
import Card from "../card/card";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const { state, dispatch } = useContext(SomeDate);
  // let a = 0;
  useEffect(() => {
    console.log("useEffect Product component");
    console.log("numItem is : ", state.numItem);
    const url = `https://dummyjson.com/products/?limit=${state.numItem}`;

    GetApi(url, "GET").then(async (result) => {
      await dispatch({ type: "setDateProduct", payload: result });
    });
  }, [dispatch, state.numItem, state.scrollPosition]);

  console.log("state scroll position ", state.scrollPosition);
  return (
    <div id="boxProductComponent">
      <div id="boxContentProductComponent">
        {state.ProductDummy &&
          state.ProductDummy.products.map((props) => {
            return (
              <Card
                value={props}
                discount={true}
                isFavorite={true}
                key={props.id}
              />
            );
          })}
      </div>
      {state.ProductDummy &&
      state.ProductDummy.limit !== state.ProductDummy.total ? (
        <div
          id="showMoreProduct"
          onClick={() => {
            console.log("click ShowMore");
            dispatch({ type: "setNumItem" });
          }}
        >
          <Link id="showMore">show more</Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
