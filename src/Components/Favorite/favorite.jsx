import "./favorite.css";
import { useContext } from "react";
import { SomeDate } from "../../App";
import CardProduct from "../ProductsList/cardProduct/cardProduct";

export default function FavoriteComponent() {
  const { globalState } = useContext(SomeDate);
  let productsFavorite = globalState.productsFavorite
  let isProductsFavoriteZero = productsFavorite.length === 0

  return (
    <div className="favorite">
      <div className="favorite__title">Product Favorite</div>
      {isProductsFavoriteZero ?
        <div className="favorite__no-product">no item </div> :
        <div className="favorite__list">
          {productsFavorite.map(props =>
            <CardProduct
              discountIconOn={true}
              favoriteIconOn={true}
              productDetail={props}
              key={props.id} />
          )}
        </div>
      }
    </div>
  );
}
