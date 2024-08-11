import { useContext, useEffect } from "react"
import { SomeDate } from "../../../App"
import "./productGallery.css"

export default function ProductGallery() {
    const { globalState } = useContext(SomeDate)
    let product = globalState.ShowProduct
    let productTitle = product.title
    let amountImage = product.images.length
    let urlThumbnailImage = product.images[0]

    useEffect(() => {
        let elementBtnNext = document.getElementsByClassName("product-gallery__btn-next-image")[0]
        if (amountImage !== 1) {
            elementBtnNext.classList.remove("product-gallery__btn-next-image--disable")
        }
    }, [amountImage]);

    return (
        <div className="product-gallery">
            <img className="product-gallery__image-main" src={urlThumbnailImage} alt={productTitle} />
            <div className="product-gallery__image-list image-list" onScroll={handleGalleryScroll} >
                <button className="product-gallery__btn-next-image product-gallery__btn-next-image--disable" onClick={handleScrollRight}> {">"} </button>
                <button className="product-gallery__btn-prev-image product-gallery__btn-prev-image--disable" onClick={handleScrollLeft}> {"<"} </button>
                {product.images.map((props, index) =>
                    <img className="image-list__image" src={props} alt={productTitle + index} onMouseOver={handleToggleImage()} key={props} />
                )}
            </div>
            <div className="product-gallery__amount-image" deta-amount="1">{"/" + amountImage}</div>
        </div>
    )

    function handleGalleryScroll() {
        let elementGalleryImageList = document.getElementsByClassName("product-gallery__image-list")[0]
        let elementBtnNext = document.getElementsByClassName("product-gallery__btn-next-image")[0]
        let elementBtnPrev = document.getElementsByClassName("product-gallery__btn-prev-image")[0]
        let elementAmountImage = document.getElementsByClassName("product-gallery__amount-image")[0]
        let widthImage = elementGalleryImageList.scrollWidth / amountImage
        let positionScroll = elementGalleryImageList.scrollLeft + widthImage
        let indexImage = Math.round(positionScroll / widthImage)
        elementAmountImage.setAttribute("data-amount", indexImage)
        switch (indexImage) {
            case 1:
                elementBtnPrev.classList.add("product-gallery__btn-prev-image--disable")
                break
            case amountImage:
                elementBtnNext.classList.add("product-gallery__btn-next-image--disable")
                break
            default:
                elementBtnPrev.classList.remove("product-gallery__btn-prev-image--disable")
                elementBtnNext.classList.remove("product-gallery__btn-next-image--disable")
        }
    }

    function handleToggleImage() {
    }

    function handleScrollLeft() {
        let galleryImageList = document.getElementsByClassName("product-gallery__image-list")[0]
        let widthGallery = galleryImageList.scrollWidth / amountImage
        galleryImageList.scrollLeft -= widthGallery;
    }

    function handleScrollRight() {
        let galleryImageList = document.getElementsByClassName("product-gallery__image-list")[0]
        let widthGallery = galleryImageList.scrollWidth / amountImage
        galleryImageList.scrollLeft += widthGallery;
    }
}