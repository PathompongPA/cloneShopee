import "./productShop.css";
import { useContext } from "react";
import { SomeDate } from "../../../App";

export default function ProductShop() {
  const { globalState } = useContext(SomeDate)
  let product = globalState.ShowProduct
  let brand = product.brand
  let description = product.warrantyInformation


  return (
    <div className="product-shop">
      <div className="product-shop__img-shop">img shop</div>
      <div className="product-shop__title">
        <div className="title__name">{brand} .shop</div>
        <div className="title__description">{description}</div>
      </div>
    </div>
  );
}
