import "./cardProduct.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SomeDate } from "../../../App";

export default function CardProduct(props) {
  const { globalState } = useContext(SomeDate);
  const ExchangeRate = 30

  let product = props.productDetail
  let myFavoriteProduct = globalState.productsFavorite
  let name = product.title
  let url = `/product/${product.id}/${name.replace(/\s/g, "")}`
  let thumbnail = product.thumbnail
  let discountPercent = product.discountPercentage.toFixed(0)
  let price = Math.floor(product.price * ExchangeRate)
  let ProductPriceDiscount = (price * ((100 - discountPercent) / 100)).toLocaleString(undefined, { maximumFractionDigits: 0 })

  let isFavoriteIconOn = props.favoriteIconOn
  let isDiscountIconOn = props.discountIconOn
  let isDicountIsNotZero = parseInt(discountPercent) !== 0

  return (
    <Box>
      <Image />
      <Title />
      <Price />
      <TagDiscount />
      <TagFavorite />
    </Box>
  );

  function TagDiscount() {
    if (isDiscountIconOn && isDicountIsNotZero) {
      return (
        <div className="tag-discount">
          <span className="tag-discount__title"> ลด </span>
          <span className="tag-discount__amount"> {discountPercent}% </span>
        </div >
      )
    }
  }

  function TagFavorite() {
    if (isFavoriteIconOn) {
      let classNameFavorite = "tag-favorite tag-favorite--disable"
      let isHaveProductInFavorite = findIdInArray(product.id, myFavoriteProduct)
      if (isHaveProductInFavorite) {
        classNameFavorite = classNameFavorite.split(" ")[0]
      }
      return (
        <div className={classNameFavorite}>
          <div className="material-symbols-outlined tag-favorite__favorite"> favorite </div>
        </div>
      )
    }
  }

  function Image() {
    return <img className="card-product__image" src={thumbnail} alt={"imgae : " + name} />
  }

  function Title() {
    return (
      <div className="card-product__title"> {name} </div>
    )
  }

  function Price() {
    if (isDiscountIconOn && isDicountIsNotZero) {
      return (
        <div className="card-product__price" >
          <div className="price__original price__original--kill-price"> {price} </div>
          <div className="price__discount"> ฿{ProductPriceDiscount} </div>
        </div>
      )
    }
    else {
      return (
        <div className="card-product__price">
          <div className="price__original"> ฿{price} </div>
        </div>
      )
    }
  }

  function Box(props) {
    return (
      <Link className="card-product" to={url} key={"box" + name} >{props.children}</Link>
    )
  }

}

function findIdInArray(item, array) {
  let state = false
  for (const element of array) {
    if (element.id === item) {
      state = true
    }
  }
  return state
}