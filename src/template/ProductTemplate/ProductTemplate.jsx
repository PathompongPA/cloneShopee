import "./ProductTemplate.css";
import {
  BackButton,
  DetailProduct,
  Footer,
  Navbar,
  ProductComponent,
  ShowProduct,
} from "../../component";

export default function ProductTemplate() {
  return (
    <div id="boxProductTemplate">
      <Navbar />
      <div id="boxContentProductTemplate">
        <BackButton />
        <ShowProduct />
        <DetailProduct />
        <ProductComponent />
        <Footer />
      </div>
    </div>
  );
}
