import "./product.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import GetApi from "../../initails/GetApi";
import { Link, useNavigate } from "react-router-dom";

export default function ProductComponent() {
  const url = "https://dummyjson.com/products";
  const { state, dispatch } = useContext(SomeDate);
  const navigate = useNavigate();

  useEffect(() => {
    GetApi(url, "GET").then(async (result) => {
      await dispatch({ type: "setDateProduct", payload: result });
    });
  }, [dispatch]);

  function ShowProduct(e) {
    const data = e.currentTarget.getAttribute("data");
    const id = e.currentTarget.getAttribute("data-id");
    navigate(`/product/${id}/${data.replace(/\s/g, "")}`);
  }

  return (
    <div id="boxProductComponent" className="boxComponent pdt1">
      <div id="boxProductShow">
        {state.ProductDummy &&
          state.ProductDummy.products.map((props) => {
            return (
              <Link
                id={props.id}
                className="boxProduct"
                onClick={ShowProduct}
                data={props.title}
                data-id={props.id}
                key={"box" + props.title}
              >
                <div id="boxProductImage">
                  <div id="ShowDiscount">
                    <span id="decrease" key={"decrease" + props.title}>
                      ลด
                    </span>
                    <span id="discountPercentage">
                      {props.discountPercentage.toFixed(0)}%
                    </span>
                  </div>
                  <img
                    className="image-product"
                    src={props.thumbnail}
                    key={"img" + props.title}
                    alt=""
                  ></img>
                </div>
                <div id="title" key={"title" + props.title}>
                  {props.title}
                </div>
                <div id="price" key={"price" + props.price}>
                  {props.discountPercentage && (
                    <div id="boxPriceOld">
                      <div id="priceOld" key={"price" + props.price + "left"}>
                        ฿{props.price * 30}
                      </div>
                    </div>
                  )}
                  <div id="boxPriceDiscount">
                    <div id="price-left" key={"price" + props.price + "left"}>
                      ฿{" "}
                      {(
                        props.price *
                        ((100 - props.discountPercentage) / 100) *
                        30
                      ).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div id="price-right" key={"price" + props.price + "right"}>
                      in stork {props.stock}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
