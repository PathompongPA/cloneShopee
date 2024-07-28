import "./ProductList.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import CardProduct from "./cardProduct/cardProduct";
import GetApi from "../../Initials/GetApi";
import BtnShowMoreProduct from "./BtnShowMoreProduct/BtnShowMoreProduct";

export default function ProductListComponent() {
  const { globalState, dispatch } = useContext(SomeDate);
  let HaveProductJsonInGlobalState = globalState.ProductJson !== undefined

  useEffect(() => {
    let url = `https://dummyjson.com/products/?limit=${globalState.numItem}`;
    GetApi(url, "GET").then(async (result) => {
      await dispatch({ type: "setJsonProduct", payload: result });
    });
  }, [dispatch, globalState.numItem, globalState.scrollPosition, globalState.ProductDummy]);


  if (HaveProductJsonInGlobalState) {
    let ListProducts = globalState.ProductJson.products
    const ListCardProducts = ListProducts.map(productDetail =>
      <CardProduct
        discountIconOn={true}
        favoriteIconOn={true}
        productDetail={productDetail}
        key={productDetail.id}
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