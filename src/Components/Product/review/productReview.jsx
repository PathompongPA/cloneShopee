import "./productReview.css";
import { useContext } from "react";
import { SomeDate } from "../../../App";
import { v4 as uuIdV4 } from "uuid";
import ReviewCard from "./card/reviewCard";

// productTemplate >> productReview 
export default function ProductReview() {
  const { globalState } = useContext(SomeDate);

  let isHaveStateShowProduct = globalState.ShowProduct !== undefined
  if (isHaveStateShowProduct) {
    let showProduct = globalState.ShowProduct
    let reviews = showProduct.reviews
    return (
      <div className="product-review">
        <div className="product-review__title"> Product review</div>
        {reviews.map(props =>
          <ReviewCard reviews={props} key={uuIdV4()} />
        )}
      </div>
    )
  }
}
