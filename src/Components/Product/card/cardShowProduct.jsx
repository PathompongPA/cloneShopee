import "./cardShowProduct.css";
import { useContext, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { SomeDate } from "../../../App";
import BackButtonComponent from "../../BackButton/BackButton";

export default function CardDetailProduct() {
  const { id } = useParams();
  const { state, dispatch } = useContext(SomeDate);
  const boxSlideShowProductSub = useRef();
  const mainImg = useRef();
  const heart = useRef();

  useEffect(() => {
    dispatch({ type: "clear-count" });
    if (state.Favorite !== undefined) {
      const isFavorite = state.Favorite.findIndex(
        (element) => element.id === parseInt(id)
      );
      if (isFavorite !== -1) {
        heart.current.className = "addFavorite";
      } else {
        heart.current.className = "noFavorite";
      }
    }
  }, [dispatch, id, state.Favorite, state.ShowProduct]);

  function scroll(scrollOffset) {
    boxSlideShowProductSub.current.scrollLeft += scrollOffset;
  }

  return (
    <div id="boxShowProduct" className="boxComponent Content">
      <BackButtonComponent />
      <div id="boxContentShowProduct">
        <div id="boxContent-left">
          <div id="boxImgShowProduct">
            <img
              id="showProductImg"
              ref={mainImg}
              src={state.ShowProduct && state.ShowProduct.thumbnail}
              alt={state.ShowProduct && state.ShowProduct.title}
            ></img>

            <div id="boxSlideShowProduct">
              <div id="scrollLeft" onClick={() => scroll(-50)}>
                {"<"}
              </div>

              <div id="boxSlideShowProductSub" ref={boxSlideShowProductSub}>
                {state.ShowProduct &&
                  state.ShowProduct.images.map((props) => {
                    return (
                      <img
                        id={props}
                        className="imgSlideShowProduct"
                        src={props}
                        alt={props}
                        onMouseOver={() => {
                          mainImg.current.src = props;
                        }}
                        key={"img" + props}
                      ></img>
                    );
                  })}
              </div>

              <div id="scrollRight" onClick={() => scroll(+50)}>
                {">"}
              </div>
            </div>
          </div>
        </div>

        <div id="boxContent-right">
          <div id="boxTitleShowProduct">
            <div id="showProductTitle">
              {state.ShowProduct && state.ShowProduct.title}
            </div>

            <div id="FavoriteButton">
              <Link
                id="heart"
                ref={heart}
                className="noFavorite"
                onClick={async () => {
                  await dispatch({
                    type: "add-Favorite",
                    payload: state.ShowProduct,
                  });
                }}
              >
                add to favorite
              </Link>
            </div>
          </div>

          <div id="boxShowProductStatus">
            <div id="showProductRating">
              ratting : {state.ShowProduct && state.ShowProduct.rating}{" "}
            </div>

            <div id="showProductStock">
              In stock : {state.ShowProduct && state.ShowProduct.stock} piece
            </div>
          </div>

          <div id="showProductPrice">
            {state.ShowProduct &&
              (
                state.ShowProduct.price *
                ((100 - state.ShowProduct.discountPercentage) / 100) *
                30
              ).toLocaleString(undefined, { maximumFractionDigits: 0 })}{" "}
            ฿
          </div>

          <div id="boxAddItem">
            <button
              id="decreaseItem"
              onClick={() => {
                dispatch({ type: "decrease" });
              }}
            >
              {" "}
              -
            </button>

            <div id="showCount">{state.count}</div>

            <button
              id="increaseItem"
              onClick={() => {
                dispatch({ type: "increase", payload: id });
              }}
            >
              {" "}
              +
            </button>
          </div>

          <Link
            id="boxAddItemToCart"
            onClick={() => {
              let objDataProduct = state.ShowProduct;
              objDataProduct["amount"] = state.count;
              console.log("state objDataProduct : ", objDataProduct.id);
              dispatch({ type: "add-to-cart", payload: objDataProduct });
              console.log("state cart ", state.cart);
            }}
          >
            add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
