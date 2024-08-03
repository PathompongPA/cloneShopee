import "./productTitle.css";
import { useContext } from "react";
import { SomeDate } from "../../../App";
import { LoaderComponent } from "../../Loader";
import { Link } from "react-router-dom";

export default function ProductTitle() {
  const { globalState, dispatch } = useContext(SomeDate);
  let isHaveProductForShow = globalState.ShowProduct !== undefined
  let productAmount = globalState.amountProduct
  let product = globalState.ShowProduct
  let productTitle = product.title
  let productRatting = product.rating
  let productStock = product.stock
  let productPrice = (globalState.ShowProduct.price * ((100 - globalState.ShowProduct.discountPercentage) / 100) * 30).toLocaleString(undefined, { maximumFractionDigits: 0 })


  if (isHaveProductForShow) {
    return (
      <div className="product-detail" >
        <div className="product-detail__detail detail">
          <div className="detail__status">
            <div className="status__price"> ฿{productPrice} </div>
            <div className="status__add-to-favorite" onClick={handleToggleFavorite} > add to favorite </div>
          </div>
          <h2 className="detail__name"> {productTitle} </h2>
          <div className="detail__title">
            <div className="title__ratting"> ratting : {productRatting} </div>
            <div className="title__amount-in-stock"> In stock : {productStock} piece </div>
          </div>
          <div className="detail__add-item add-item">
            <Link className="add-item__amount">{productAmount}</Link>
            <Link className="add-item__decrease" onClick={handleDecrese} > - </Link>
            <Link className="add-item__increase" onClick={handleIncrese} > + </Link>
            <Link className="add-item__add-to-cart" onClick={handleAddItem} > add to cart </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return <LoaderComponent />
  }

  function handleDecrese() {
    dispatch({ type: "decrease-amount-product" })
  }

  function handleIncrese() {
    dispatch({ type: "increase-amount-product" })
  }



  function handleAddItem() {
    let objDataProduct = globalState.ShowProduct;
    objDataProduct["amount"] = globalState.amountProduct;
    dispatch({ type: "add-to-cart", payload: objDataProduct });
  }

  async function handleToggleFavorite() {
    await dispatch({
      type: "add-product-favorite",
      payload: globalState.ShowProduct
    });
  }


}