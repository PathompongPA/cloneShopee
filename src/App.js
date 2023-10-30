import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initial } from "./store/MainState/MainState";
import { RootRouter } from "./store";
import { reducer } from "./Initials";

const SomeDate = createContext();
const RootRoutes = createBrowserRouter(RootRouter);

function App() {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <SomeDate.Provider value={{ state, dispatch }}>
      <RouterProvider router={RootRoutes} />
    </SomeDate.Provider>
  );
}

export { SomeDate };
export default App;
