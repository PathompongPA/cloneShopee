import "./cardProduct.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SomeDate } from "../../../App";

export default function CardProduct(props) {
  const { globalState } = useContext(SomeDate);
  const ExchangeRate = 30
  const tagFavorite = document.getElementsByClassName("tag-favorite")
  let ProductDetail = props.productDetail
  let ProductName = ProductDetail.title
  let ProductUrl = `/product/${ProductDetail.id}/${ProductName.replace(/\s/g, "")}`
  let ProductThumbnail = ProductDetail.thumbnail
  let ProductDiscountPercent = ProductDetail.discountPercentage.toFixed(0)
  let ProductPrice = Math.floor(ProductDetail.price * ExchangeRate)
  let ProductPriceDiscount = (ProductPrice * ((100 - ProductDiscountPercent) / 100)).toLocaleString(undefined, { maximumFractionDigits: 0 })

  let isFavoriteIconOn = props.favoriteIconOn
  let isDiscountIconOn = props.discountIconOn
  let isDicountIsNotZero = parseInt(ProductDiscountPercent) !== 0

  useEffect(() => {
    let haveProductsFavoriteInGlobalState = globalState.ProductsFavorite !== undefined
    let haveProductDetail = props.productDetail !== undefined
    if (isFavoriteIconOn && haveProductDetail) {
      if (haveProductsFavoriteInGlobalState) {
        // eslint-disable-next-line array-callback-return
        globalState.ProductsFavorite.map((ProductDetail) => {
          let haveProductInProductFavoriteState = ProductDetail.id === props.productDetail.id
          if (haveProductInProductFavoriteState) {
            tagFavorite.classList.toggle = "tag-favorite--show";
          }
        });
      }
    }
  }, [globalState.ProductsFavorite, isFavoriteIconOn, props.productDetail, tagFavorite.classList]);

  function TagDiscount() {
    if (isDiscountIconOn && isDicountIsNotZero) {
      return (
        <div className="tag-discount">
          <span className="tag-discount__title" key={"decrease" + props.productDetail.title}>
            ลด
          </span>
          <span className="tag-discount__amount">
            {ProductDiscountPercent}%
          </span>
        </div >
      )
    }
  }

  function TagFavorite() {
    if (isFavoriteIconOn) {
      return (
        <div className="tag-favorite addHeard">
          <div className="tag-favorite__heart"></div>
        </div>
      )
    }
  }

  function Image() {
    return <img className="card-product__image"
      src={ProductThumbnail}
      key={"img" + ProductName}
      alt={ProductName}
    />
  }

  function Title() {
    return (
      <div className="card-product__title" key={"title" + ProductName}> {ProductName} </div>
    )
  }

  function Price() {
    if (isDiscountIconOn && isDicountIsNotZero) {
      return (
        <div className="card-product__price " key={"price" + ProductPrice}>
          <div className="price__original price__original--kill-price"> {ProductPrice} </div>
          <div className="price__discount"> ฿{ProductPriceDiscount} </div>
        </div>
      )
    }
    else {
      return (
        <div className="card-product__price" key={"price" + ProductPrice}>
          <div className="price__original"> ฿{ProductPrice} </div>
        </div>
      )
    }
  }

  function Box(props) {
    return (
      <Link className="card-product" to={ProductUrl} key={"box" + ProductName} >{props.children}</Link>
    )
  }

  return (
    <Box>
      <Image />
      <Title />
      <Price />
      <TagDiscount />
      <TagFavorite />
    </Box>
  );
}
