import "./Product.css";
import ProductListComponent from "../ProductsList/ProductList";
import CardDetailProduct from "./card/cardShowProduct";
import DetailProduct from "./detailProduct/detailProduct";
import ReviewComponent from "./review/review";
import ShopComponent from "./shop/shop";

export default function ProductComponent() {
  return (
    <div id="boxShowProduct">
      <CardDetailProduct />
      <ShopComponent />
      <DetailProduct />
      <ReviewComponent />
      <ProductListComponent />
    </div>
  );
}
