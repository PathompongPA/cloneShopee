import "./ProductList.css";
import { useContext } from "react";
import { SomeDate } from "../../App";
import CardProduct from "./cardProduct/cardProduct";
import LoaderComponent from "../Loader/Loader";

export default function ProductListComponent() {
  const { globalState } = useContext(SomeDate);
  let HaveProductJsonInGlobalState = globalState.ProductJson !== undefined
  if (HaveProductJsonInGlobalState) {
    let ListProducts = globalState.ProductJson.products
    return (
      <div className="productList">
        {ListProducts.map(productDetail =>
          < CardProduct discountIconOn={true} favoriteIconOn={true} productDetail={productDetail} key={productDetail.id} />
        )}
      </div>)
  } else {
    return <LoaderComponent />
  }
}