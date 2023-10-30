import "./ProductList.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import { Link } from "react-router-dom";
import CardProduct from "./cardProduct/cardProduct";
import GetApi from "../../Initials/GetApi";

export default function ProductListComponent() {
  const { state, dispatch } = useContext(SomeDate);
  // let a = 0;
  useEffect(() => {
    console.log("useEffect Product component");
    const url = `https://dummyjson.com/products/?limit=${state.numItem}`;

    GetApi(url, "GET").then(async (result) => {
      await dispatch({ type: "setDateProduct", payload: result });
    });
  }, [dispatch, state.numItem, state.scrollPosition]);

  return (
    <div id="boxProductComponent">
      <div id="boxContentProductComponent">
        {state.ProductDummy &&
          state.ProductDummy.products.map((props) => {
            return (
              <CardProduct
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
