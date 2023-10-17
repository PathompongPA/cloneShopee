import "./product.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import GetApi from "../../initails/GetApi";
import Card from "../card/card";

export default function ProductComponent() {
  const url = "https://dummyjson.com/products";
  const { state, dispatch } = useContext(SomeDate);
  useEffect(() => {
    GetApi(url, "GET").then(async (result) => {
      await dispatch({ type: "setDateProduct", payload: result });
    });
  }, [dispatch]);

  return (
    <div id="boxProductComponent" className="boxComponent pdt1">
      <div id="boxContentProductComponent">
        {state.ProductDummy &&
          state.ProductDummy.products.map((props) => {
            return <Card value={props} discount={true} key={props.id} />;
          })}
      </div>
    </div>
  );
}
