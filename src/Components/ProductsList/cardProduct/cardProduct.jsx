import "./cardProduct.css";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SomeDate } from "../../../App";

export default function CardProduct(value) {
  const { state, dispatch } = useContext(SomeDate);
  // const id = value.value.id;
  const boxHeart = useRef();

  useEffect(() => {
    if (value.isFavorite) {
      if (state.Favorite !== undefined && value.value !== undefined) {
        const isFavorite = state.Favorite.findIndex(
          (element) => element.id === value.value.id
        );
        if (isFavorite !== -1) {
          boxHeart.current.className = "addHeard";
        } else {
          boxHeart.current.className = "noHeard";
        }
      } else {
        boxHeart.current.className = "noHeard";
      }
    }
  }, [
    state.Favorite,
    value.showProduct,
    value.value,
    dispatch,
    value.isFavorite,
  ]);

  return (
    <Link
      id={value.value.id}
      className="boxCard"
      data={value.value.title}
      data-id={value.value.id}
      to={
        "/product/" +
        value.value.id +
        "/" +
        value.value.title.replace(/\s/g, "")
      }
      key={"box" + value.value.title}
    >
      <div id="boxImageCard">
        {value.discount ? (
          <div id="ShowDiscount">
            <span id="decrease" key={"decrease" + value.value.title}>
              ลด
            </span>
            <span id="discountPercentage">
              {value.value.discountPercentage.toFixed(0)}%
            </span>
          </div>
        ) : (
          <></>
        )}

        {value.isFavorite ? (
          <div id="boxHeart" ref={boxHeart} className="noHeard">
            <div id="Heart"></div>
          </div>
        ) : (
          <></>
        )}

        <img
          className="imageCard"
          src={value.value.thumbnail}
          key={"img" + value.value.title}
          alt=""
        ></img>
      </div>

      <div id="titleCard" key={"title" + value.value.title}>
        {value.value.title}
      </div>

      <div id="priceCard" key={"price" + value.value.price}>
        {value.value.discountPercentage && (
          <div id="boxPriceOldCard">
            <div id="priceOldCard" key={"price" + value.value.price + "left"}>
              ฿{value.value.price * 30}
            </div>
          </div>
        )}
        <div id="boxPriceDiscountCard">
          <div id="price-left" key={"price" + value.value.price + "left"}>
            ฿{" "}
            {(
              value.value.price *
              ((100 - value.value.discountPercentage) / 100) *
              30
            ).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div id="price-right" key={"price" + value.value.price + "right"}>
            in stork {value.value.stock}
          </div>
        </div>
      </div>
    </Link>
  );
}
// {
//   value.isDeleteFavorite && (
//     <Link
//       id="boxDeleteFavorite"
//       onClick={async () => {
//         await dispatch({
//           type: "add-Favorite",
//           payload: { id: id },
//         });
//       }}
//     >
//       X
//     </Link>
//   );
// }
