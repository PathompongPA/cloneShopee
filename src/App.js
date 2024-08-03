import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { createContext, useEffect, useReducer } from "react";
import { initialState } from "./store/MainState/MainState";
import { RootRouter } from "./store";
import { reducer } from "./Initials";
import GetApi from "./Initials/GetApi";

const SomeDate = createContext();
const RootRoutes = createHashRouter(RootRouter);

function App() {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let url = `https://dummyjson.com/products/?limit=${globalState.numItem}`;
    GetApi(url, "GET").then((result) => {
      dispatch({ type: "setJsonProduct", payload: result });
    });
  }, [dispatch, globalState.numItem]);

  window.onscroll = () => {
    DownloadMoreProduct()
    SetAttributeForChangeAmountImage()
  }

  return (
    <SomeDate.Provider value={{ globalState, dispatch }}>
      <RouterProvider router={RootRoutes} />
    </SomeDate.Provider>
  );

  function SetAttributeForChangeAmountImage() {
    const navbar = document.getElementsByClassName("navbar")[0]
    let positionScroll = window.scrollY
    try {
      navbar.setAttribute("data-scroll", positionScroll)
    } catch (error) {
    }
  }

  function DownloadMoreProduct() {
    let maxScroll = document.body.offsetHeight - 50
    let scrollPosition = Math.round(window.innerHeight + window.scrollY)
    let isScrollToEnd = scrollPosition >= maxScroll
    if (isScrollToEnd) {
      dispatch({ type: "setNumItem" });
    }
  }
}

export { SomeDate };
export default App;
