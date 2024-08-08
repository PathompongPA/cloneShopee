import "./productDescription.css"
import { SomeDate } from "../../../App";
import { useContext } from "react";

export default function ProductDescription() {
  const { globalState } = useContext(SomeDate);
  let product = globalState.ShowProduct
  let category = product.category ? product.category : "-"
  let brand = product.brand ? product.brand : "-"
  let description = product.description ? product.description : "-"


  let isHaveShowProduct = product !== undefined
  if (isHaveShowProduct) {
    return (
      <div className="product-description">
        <div className="product-description__title">Product details</div>
        <div className="product-description__topic-category"> category</div>
        <div className="product-description__category"> {category} </div>
        <div className="product-description__topic-brand">brand</div>
        <div className="product-description__brand"> {brand} </div>
        <div className="product-description__topic-description"> Description</div>
        <div className="product-description__description">{description}</div>
      </div>
    );
  }
}
