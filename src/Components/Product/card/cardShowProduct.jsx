import "./cardShowProduct.css";
import { useContext, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { SomeDate } from "../../../App";
import BackButtonComponent from "../../BackButton/BackButton";

export default function CardDetailProduct() {
  const { id } = useParams();
  const { globalState, dispatch } = useContext(SomeDate);
  const boxSlideShowProductSub = useRef();
  const mainImg = useRef();
  const heart = useRef();

  useEffect(() => {
    dispatch({ type: "clear-count" });
    if (globalState.Favorite !== undefined) {
      const isFavorite = globalState.Favorite.findIndex(
        (element) => element.id === parseInt(id)
      );
      if (isFavorite !== -1) {
        heart.current.className = "addFavorite";
      } else {
        heart.current.className = "noFavorite";
      }
    }
  }, [dispatch, id, globalState.Favorite, globalState.ShowProduct]);

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
              src={globalState.ShowProduct && globalState.ShowProduct.thumbnail}
              alt={globalState.ShowProduct && globalState.ShowProduct.title}
            ></img>

            <div id="boxSlideShowProduct">
              <div id="scrollLeft" onClick={() => scroll(-50)}>
                {"<"}
              </div>

              <div id="boxSlideShowProductSub" ref={boxSlideShowProductSub}>
                {globalState.ShowProduct &&
                  globalState.ShowProduct.images.map((props) => {
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
              {globalState.ShowProduct && globalState.ShowProduct.title}
            </div>

            <div id="FavoriteButton">
              <Link
                id="heart"
                ref={heart}
                className="noFavorite"
                onClick={async () => {
                  await dispatch({
                    type: "add-Favorite",
                    payload: globalState.ShowProduct,
                  });
                }}
              >
                add to favorite
              </Link>
            </div>
          </div>

          <div id="boxShowProductStatus">
            <div id="showProductRating">
              ratting : {globalState.ShowProduct && globalState.ShowProduct.rating}{" "}
            </div>

            <div id="showProductStock">
              In stock : {globalState.ShowProduct && globalState.ShowProduct.stock} piece
            </div>
          </div>

          <div id="showProductPrice">
            {globalState.ShowProduct &&
              (
                globalState.ShowProduct.price *
                ((100 - globalState.ShowProduct.discountPercentage) / 100) *
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

            <div id="showCount">{globalState.count}</div>

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
              let objDataProduct = globalState.ShowProduct;
              objDataProduct["amount"] = globalState.count;
              dispatch({ type: "add-to-cart", payload: objDataProduct });
              console.log("state cart ", globalState.cart);
            }}
          >
            add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
