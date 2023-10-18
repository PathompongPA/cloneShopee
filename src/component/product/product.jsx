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

    // callAddSetNumItem(state.scrollPosition);
    // const onScroll = () =>
    //   dispatch({ type: "setScrollPosition", payload: window.pageYOffset });
    // window.removeEventListener("scroll", onScroll);
    // window.addEventListener("scroll", onScroll, { passive: false });
    // return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch, state.numItem, state.scrollPosition]);

  // function callAddSetNumItem(valueState) {
  //   a++;
  //   if (valueState - 1600 * a > 1600 * a) {
  //     callAddSetNumItem(valueState);
  //   } else {
  //     return dispatch({ type: "setNumItem" });
  //   }
  // }

  console.log("state scroll position ", state.scrollPosition);
  return (
    <div id="boxProductComponent" className="boxComponent pdt1">
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
          <Link style={{ color: "black" }}>show more</Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
