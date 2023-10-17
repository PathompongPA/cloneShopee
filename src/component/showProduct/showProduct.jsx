import "./showProduct.css";
import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SomeDate } from "../../App";
import GetApi from "../../initails/GetApi";

export default function ShowProduct() {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const { state, dispatch } = useContext(SomeDate);
  const boxSlideShowProductSub = useRef();
  const mainImg = useRef();
  const heart = useRef();

  useEffect(() => {
    dispatch({ type: "clear-count" });
    dispatch({ type: "clearShowProduct" });

    GetApi("https://dummyjson.com/products/" + id, "GET").then((result) => {
      dispatch({ type: "setShowProduct", payload: result });
    });

    window.scrollTo(0, 0);
  }, [dispatch, id]);

  function scroll(scrollOffset) {
    boxSlideShowProductSub.current.scrollLeft += scrollOffset;
  }

  function back() {
    navigate(-1);
  }

  if (state.Favorite !== undefined) {
    if (state.Favorite.find((element) => element.id === id) !== undefined) {
      console.log("addFavorite");
      // heart.current.className = "addFavorite";
    } else {
      console.log("noFavorite");
      // heart.current.className = "noFavorite";
    }
  }
  console.log("**************************************");
  console.log("id : ", id, "name : ", name);
  console.log("state ProductDummy: ", state.ProductDummy);
  console.log("state showProduct: ", state.ShowProduct);
  console.log("state Favorite : ", state.Favorite);
  console.log("**************************************");

  return (
    <div id="boxShowProduct" className="boxComponent Content">
      <div id="buttonBack">
        <Link id="back" onClick={back}>
          back
        </Link>
      </div>

      <div id="boxContent">
        <div id="boxContent-left">
          <div id="boxImgShowProduct">
            <img
              id="showProductImg"
              ref={mainImg}
              src={state.ShowProduct && state.ShowProduct.images[0]}
              alt={name}
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
                onClick={() => {
                  dispatch({
                    type: "add-Favorite",
                    payload: state.ShowProduct,
                  });
                }}
                ref={heart}
              >
                heart
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

          <div id="boxAddItemToCart">add to cart</div>
        </div>
      </div>
    </div>
  );
}
