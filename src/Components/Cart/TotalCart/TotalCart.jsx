import { useRef } from "react";
import "./TotalCart.css";
export default function TotalCart() {
  const checkBox = useRef();
  const box = useRef();
  return (
    <div id="boxTotalCart" ref={box}>
      <div id="boxTotalCartSelect">
        <input
          id="SelectAllItem"
          type="checkbox"
          value={true}
          ref={checkBox}
          onClick={() => {
            if (checkBox.current.value) {
              box.current.style.backgroundColor = "red";
              console.log("red");
            } else {
              box.current.style.backgroundColor = "white";
              console.log("white");
            }
          }}
        ></input>
      </div>
      <div id="boxTotalCartSummary">
        <input type="button" value={"Buy Now "}></input>
      </div>
    </div>
  );
}
