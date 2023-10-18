import "./favorite.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import Card from "../card/card";

export default function FavoriteComponent() {
  const { state } = useContext(SomeDate);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="boxFavoriteComponent">
      <div id="boxContentFavoriteComponent">
        {state.Favorite === undefined ? (
          <div id="noFavoriteItem">No one favorite item.</div>
        ) : (
          state.Favorite.map((props) => {
            return (
              <Card
                value={props}
                discount={false}
                isFavorite={false}
                key={props}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
