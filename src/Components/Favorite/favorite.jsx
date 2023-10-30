import "./favorite.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import CardProduct from "../ProductsList/cardProduct/cardProduct";

export default function FavoriteComponent() {
  const { state } = useContext(SomeDate);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("favorite component");
  }, [state.Favorite]);

  return (
    <div id="boxFavoriteComponent">
      <div id="boxContentFavoriteComponent">
        <div id="boxTitleFavoriteComponent">
          <p>favorite</p>
        </div>
        <div id="boxCardFavorite">
          {state.Favorite === undefined ? (
            <div id="noFavoriteItem">No one favorite item.</div>
          ) : (
            state.Favorite.map((props) => {
              return (
                <CardProduct
                  value={props}
                  discount={false}
                  isFavorite={false}
                  isDeleteFavorite={true}
                  key={props}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
