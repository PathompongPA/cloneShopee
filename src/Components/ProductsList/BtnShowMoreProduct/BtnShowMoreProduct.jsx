import { useContext } from "react";
import { SomeDate } from "../../../App";
import { Link } from "react-router-dom";
import "./BtnShowMoreProduct.css"

export default function BtnShowMoreProduct() {
    const { globalState, dispatch } = useContext(SomeDate);
    // console.log("BtnShowMoreProduct", globalState);
    const state = globalState.ProductDummy

    const handleOnclick = () => {
        dispatch({ type: "setNumItem" });
    }

    if (state !== undefined && state.limit !== state.total) {
        console.log(state.limit, state.total);
        return (
            <Link className="BtnShowMoreProducts" onClick={handleOnclick} >
                show more
            </Link>
        )
    }
}