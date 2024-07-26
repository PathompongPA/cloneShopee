import "./ProductTemplate.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import { useParams } from "react-router-dom";
import GetApi from "../../Initials/GetApi";
import {
  FooterComponent,
  LoaderComponent,
  NavbarComponent,
  ProductComponent,
} from "../../Components";
import { GoToTop } from "../../Initials";

export default function ProductTemplate() {
  const { globalState, dispatch } = useContext(SomeDate);
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "clear-count" });
    dispatch({ type: "clearShowProduct" });

    GetApi("https://dummyjson.com/products/" + id, "GET").then((result) => {
      dispatch({ type: "setShowProduct", payload: result });
    });

    GoToTop();
  }, [dispatch, id]);

  return (
    <div id="boxProductTemplate">
      <NavbarComponent />
      {globalState.ShowProduct !== undefined ? (
        <div id="boxContentProductTemplate">
          <ProductComponent />
        </div>
      ) : (
        <div id="boxLoaderProductTemplate">
          <LoaderComponent />
        </div>
      )}
      <FooterComponent />
    </div>
  );
}
