import { useContext } from "react";
import { SomeDate } from "../../../App";
import { Link } from "react-router-dom";
import "./BtnShowMoreProduct.css"

export default function BtnShowMoreProduct() {
    const { globalState, dispatch } = useContext(SomeDate);

    const handleOnclick = () => {
        dispatch({ type: "setNumItem" });
    }

    let HaveProductInGlobalSate = globalState.ProductJson !== undefined
    let amountProductLessMoreThanProductTotal = globalState.ProductJson.limit !== globalState.ProductJson.total
    if (HaveProductInGlobalSate && amountProductLessMoreThanProductTotal) {
        return (
            <Link className="BtnShowMoreProducts" onClick={handleOnclick} >
                show more
            </Link>
        )
    }
}