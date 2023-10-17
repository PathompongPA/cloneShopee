import "./showProduct.css";
import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SomeDate } from "../../App";
import GetApi from "../../initails/GetApi";
import LoaderComponent from "../Loader/Loader";

export default function ShowProduct() {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const { state, dispatch } = useContext(SomeDate);
  const boxSlideShowProductSub = useRef();
  const mainImg = useRef();
  const heart = useRef();
  const loader = useRef();

  useEffect(() => {
    console.log("useEffect >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ");
    dispatch({ type: "clear-count" });

    GetApi("https://dummyjson.com/products/" + id, "GET").then((result) => {
      dispatch({ type: "setShowProduct", payload: result });
      loader.current.style.display = "none";
    });

    if (state.Favorite !== undefined) {
      console.log("in className status is : no undefined");
      console.log(
        state.Favorite.findIndex((element) => element.id === parseInt(id))
      );
      const isFavorite = state.Favorite.findIndex(
        (element) => element.id === parseInt(id)
      );
      if (isFavorite !== -1) {
        console.log("in className status is :", false);
        heart.current.className = "addFavorite";
      } else {
        console.log("in className status is :", true);
        heart.current.className = "noFavorite";
      }
    }
    window.scrollTo(0, 0);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  }, [dispatch, id, state.Favorite]);

  function scroll(scrollOffset) {
    boxSlideShowProductSub.current.scrollLeft += scrollOffset;
  }

  function back() {
    navigate(-1);
  }

  console.log("**************************************");
  console.log("id : ", parseInt(id), "name : ", name);
  console.log("state ProductDummy: ", state.ProductDummy);
  console.log("state showProduct: ", state.ShowProduct);
  console.log("state Favorite : ", state.Favorite);
  console.log("**************************************");

  return (
    <>
      <div id="boxLoader" ref={loader}>
        <LoaderComponent />
      </div>
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
                  ref={heart}
                  className="noFavorite"
                  onClick={async () => {
                    console.log("onClick");
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

            <div id="boxAddItemToCart">add to cart</div>
          </div>
        </div>
      </div>
    </>
  );
}
