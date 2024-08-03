import "./productDescription.css"
import { SomeDate } from "../../../App";
import { useContext, useEffect } from "react";

export default function ProductDescription() {
  const { globalState } = useContext(SomeDate);
  useEffect(() => { }, []);

  return (
    <div id="boxDetailProduct">
      <div id="boxTitleDetailProduct">Product details</div>
      {globalState.ShowProduct && (
        <>
          <div id="boxContentDetailProduct">
            <div className="sectionDetailProduct"> category</div>
            <div className="valueSectionDetailProduct">
              {globalState.ShowProduct.category}
            </div>
            <div className="sectionDetailProduct">brand</div>
            <div className="valueSectionDetailProduct">
              {globalState.ShowProduct.brand}
            </div>
            <div className="sectionDetailProduct">quantity</div>
            <div className="valueSectionDetailProduct">
              {globalState.ShowProduct.stock}
            </div>
          </div>
          <div id="titleDescription"> Description</div>
          <div id="boxDescriptionDetailProduct">
            <div> {globalState.ShowProduct.description}</div>
          </div>
        </>
      )}
    </div>
  );
}
