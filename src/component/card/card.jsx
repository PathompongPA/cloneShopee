import { useContext, useEffect, useRef } from "react";
import "./card.css";
import { Link, useNavigate } from "react-router-dom";
import { SomeDate } from "../../App";

export default function Card(value) {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(SomeDate);
  const boxHeart = useRef();

  function ShowProduct(e) {
    const data = e.currentTarget.getAttribute("data");
    const id = e.currentTarget.getAttribute("data-id");
    navigate(`/product/${id}/${data.replace(/\s/g, "")}`);
  }

  useEffect(() => {
    console.log(" card component useEffect");
    if (state.Favorite !== undefined && value.value !== undefined) {
      console.log("in className status is : no undefined");
      console.log(
        state.Favorite.findIndex((element) => element.id === value.value.id)
      );
      const isFavorite = state.Favorite.findIndex(
        (element) => element.id === value.value.id
      );
      if (isFavorite !== -1) {
        console.log("in className status is :", false);
        boxHeart.current.className = "addHeard";
      } else {
        console.log("in className status is :", true);
        boxHeart.current.className = "noHeard";
      }
    } else {
      boxHeart.current.className = "noHeard";
    }
  }, [state.Favorite, value.value, dispatch]);

  console.log(value);
  return (
    <Link
      id={value.value.id}
      className="boxCard"
      onClick={ShowProduct}
      data={value.value.title}
      data-id={value.value.id}
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
          console.log("no discount")
        )}
        <div id="boxHeart" ref={boxHeart}>
          <div id="Heart" className=""></div>
        </div>

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
