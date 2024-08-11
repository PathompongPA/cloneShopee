import ProductGallery from "../gallery/productGallery";
import ProductTitle from "../Title/productTitle";
import "./productCard.css"

export default function ProductCard() {
    return (
        <div className="card">
            <ProductGallery />
            <ProductTitle />
        </div>
    )
}