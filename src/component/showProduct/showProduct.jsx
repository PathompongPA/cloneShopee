import "./showProduct.css";
import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SomeDate } from "../../App";
import GetApi from "../../initails/GetApi";

export default function ShowProduct() {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const { state, dispatch } = useContext(SomeDate);
  console.log("id : ", id, "name : ", name);
  console.log("state : ", state.ProductDummy);

  useEffect(() => {
    GetApi("https://dummyjson.com/products/" + id, "GET").then((result) => {
      console.log(result);
    });
  }, []);

  function back() {
    navigate(-1);
  }

  return (
    <div id="boxShowProduct" className="boxComponent pdt1 ">
      <div id="buttonBack">
        <Link id="back" onClick={back}>
          back
        </Link>
      </div>
      <div id="boxContent">
        <div id="boxContent-lift">
          <div id="boxImgShowProduct">
            <img
              id="showProductImg"
              src={
                state.ProductDummy &&
                state.ProductDummy.products[id - 1].images[0]
              }
              alt={name}
            ></img>
          </div>
        </div>

        <div id="boxContent-right">
          <div id="showProductTitle">
            {state.ProductDummy && state.ProductDummy.products[id - 1].title}
          </div>
          <div id="boxShowProductStatus">
            <div id="showProductRating">
              {state.ProductDummy && state.ProductDummy.products[id - 1].rating}
            </div>
            <div id="showProductStock">
              In stock :{" "}
              {state.ProductDummy && state.ProductDummy.products[id - 1].stock}{" "}
              piece
            </div>
          </div>
          <div id="showProductPrice">
            {state.ProductDummy && state.ProductDummy.products[id - 1].price} ฿
          </div>
        </div>
      </div>
    </div>
  );
}
// <div id="showProductCategory">
//   Category :{" "}
//   {state.ProductDummy && state.ProductDummy.products[id - 1].category}
// </div>
//
// <div id="showProductBrand">
//   Brand :{" "}
//   {state.ProductDummy && state.ProductDummy.products[id - 1].brand}
// </div>
//
//
// <div id="showProductDescription">
//   {state.ProductDummy &&
//     state.ProductDummy.products[id - 1].description}
// </div>
