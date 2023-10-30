import { Link } from "react-router-dom";
import "./cardCart.css";
export default function CardCartComponent(value) {
  const Title = value.value.title;
  const PricePerPice = value.value.price * 30;
  const amount = value.value.amount;
  const Total = PricePerPice * amount;
  const image = value.value.thumbnail;

  return (
    <div id="boxCardCartComponent">
      <div id="boxCardCartSelect" className="boxCardCart">
        <input id="SelectItem" type="checkbox" value={value}></input>
      </div>

      <Link
        id="boxCardCartProduct"
        className="boxCardCart"
        to={
          "/product/" +
          value.value.id +
          "/" +
          value.value.title.replace(/\s/g, "")
        }
      >
        <div id="boxCardCartImage" className="boxCardCart">
          <img id="imageItemCart" src={image} alt={Title}></img>
        </div>

        <div id="boxTitleItem">{Title}</div>
      </Link>

      <div id="boxCardCartPricePerPice" className="boxCardCart">
        {PricePerPice} ฿
      </div>

      <div id="bobCardCartAmount" className="boxCardCart">
        {amount}
      </div>

      <div id="boxCardCartTotalPrice" className="boxCardCart">
        {Total} ฿
      </div>

      <div id="boxCardCartAction" className="boxCardCart">
        delete
      </div>
    </div>
  );
}
