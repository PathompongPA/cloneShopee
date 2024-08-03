import "./favorite.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import CardProduct from "../ProductsList/cardProduct/cardProduct";

export default function FavoriteComponent() {
  const { globalState } = useContext(SomeDate);
  const test = []
  const test2 = [2, 2, 2, 2,]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="boxFavoriteComponent">
      <div id="boxContentFavoriteComponent">
        <div id="boxTitleFavoriteComponent">
          <p>favorite</p>
        </div>
        <div id="boxCardFavorite">
          {test.map(ele => console.log(ele))}
          {test2.map(ele => console.log(ele))}
          {
            globalState.productsFavorite !== undefined ? (
              globalState.productsFavorite.map((props) => {
                return (
                  <CardProduct
                    productDetail={props}
                    discount={false}
                    isFavorite={false}
                    isDeleteFavorite={true}
                    key={props}
                  />
                )
              })
            ) : (
              <div id="noFavoriteItem">No one favorite item.</div>
            )
          }
        </div>
      </div>
    </div>
  );
}
