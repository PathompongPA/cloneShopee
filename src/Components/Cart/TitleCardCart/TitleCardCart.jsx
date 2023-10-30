import "./TitleCardCart.css";

export default function TitleCardCart() {
  return (
    <div id="boxTitleCardComponent">
      <div id="boxTitleCardComponentSelect" className="boxCardCart">
        <input id="SelectItemAll" type="checkbox"></input>
      </div>

      <div id="boxTitleCardComponentTitle" className="boxCardCart">
        Product
      </div>

      <div id="boxTitleCardCartPricePerPice" className="boxCardCart">
        Price
      </div>

      <div id="boxTitleCardCartAmount" className="boxCardCart">
        Amount
      </div>

      <div id="boxTitleCardCartTotalPrice" className="boxCardCart">
        Total
      </div>

      <div id="boxTitleCardCartAction" className="boxCardCart">
        action
      </div>
    </div>
  );
}
