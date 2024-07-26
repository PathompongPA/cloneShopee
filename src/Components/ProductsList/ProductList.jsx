import "./ProductList.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import CardProduct from "./cardProduct/cardProduct";
import GetApi from "../../Initials/GetApi";
import BtnShowMoreProduct from "./BtnShowMoreProduct/BtnShowMoreProduct";

export default function ProductListComponent() {
  const { globalState, dispatch } = useContext(SomeDate);
  let state = globalState.ProductDummy

  useEffect(() => {
    let url = `https://dummyjson.com/products/?limit=${globalState.numItem}`;
    GetApi(url, "GET").then(async (result) => {
      await dispatch({ type: "setDateProduct", payload: result });
    });
  }, [dispatch, globalState.numItem, globalState.scrollPosition, globalState.ProductDummy]);


  if (state !== undefined) {
    let products = state.products
    const ListCardProducts = products.map(props =>
      <CardProduct
        value={props}
        discount={true}
        isFavorite={true}
        key={props.id}
      />
    )

    return (
      <div className="ProductList">
        <div className="ProductList__BoxListCardProduct">
          {ListCardProducts}
        </div>
        <BtnShowMoreProduct />
      </div>)
  }
}