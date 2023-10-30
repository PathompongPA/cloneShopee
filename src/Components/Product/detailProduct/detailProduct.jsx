import { SomeDate } from "../../../App";
import "./detailProduct.css";
import { useContext, useEffect } from "react";

export default function DetailProduct() {
  const { state } = useContext(SomeDate);
  useEffect(() => {}, []);

  return (
    <div id="boxDetailProduct">
      <div id="boxTitleDetailProduct">Product details</div>
      {state.ShowProduct && (
        <>
          <div id="boxContentDetailProduct">
            <div className="sectionDetailProduct"> category</div>
            <div className="valueSectionDetailProduct">
              {state.ShowProduct.category}
            </div>
            <div className="sectionDetailProduct">brand</div>
            <div className="valueSectionDetailProduct">
              {state.ShowProduct.brand}
            </div>
            <div className="sectionDetailProduct">quantity</div>
            <div className="valueSectionDetailProduct">
              {state.ShowProduct.stock}
            </div>
          </div>
          <div id="titleDescription"> Description</div>
          <div id="boxDescriptionDetailProduct">
            <div> {state.ShowProduct.description}</div>
          </div>
        </>
      )}
    </div>
  );
}
