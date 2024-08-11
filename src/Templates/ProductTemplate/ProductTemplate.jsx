import "./ProductTemplate.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import { useLocation, useParams } from "react-router-dom";
import GetApi from "../../Initials/GetApi";
import {
  FooterComponent,
  LoaderComponent,
  NavbarComponent,
  ProductCard,
  ProductDescription,
  ProductListComponent,
  ProductReview
} from "../../Components";
import { GoToTop } from "../../Initials";


export default function ProductTemplate() {
  const { globalState, dispatch } = useContext(SomeDate);
  const { id } = useParams();
  const path = useLocation()

  useEffect(() => {
    dispatch({ type: "clear-amount-product" });
    dispatch({ type: "clear-product-detail" });
    GetApi("https://dummyjson.com/products/" + id, "GET").then((result) => {
      dispatch({ type: "set-product-detail", payload: result });
    });
    GoToTop();
  }, [dispatch, id]);

  if (path.pathname === "/") {
    console.log("::: path ", path);
  }

  let haveProductForShow = globalState.ShowProduct !== undefined
  if (haveProductForShow) {
    return (
      <div className="product-template">
        <NavbarComponent />
        <ProductCard />
        <ProductDescription />
        <ProductReview />
        <ProductListComponent />
        <FooterComponent />
      </div>
    );
  } else {
    return <LoaderComponent />
  }
}
