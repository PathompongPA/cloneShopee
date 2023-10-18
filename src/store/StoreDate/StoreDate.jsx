import {
  CartComponent,
  FavoriteComponent,
  LoginComponent,
  ProductComponent,
  ShowProduct,
} from "../../component";
import ErrorComponent from "../../component/Error";
import { LoginTemplate } from "../../template";
import Main from "../../template/main";

const RootRouter = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <ProductComponent /> },
      { path: "home", element: <ProductComponent /> },
      { path: "product", element: <ProductComponent /> },
      { path: "product/:id/:name", element: <ShowProduct /> },
      { path: "favorite", element: <FavoriteComponent /> },
      { path: "cart", element: <CartComponent /> },
    ],
  },
  {
    path: "/",
    element: <LoginTemplate />,
    children: [{ path: "login", element: <LoginComponent /> }],
  },
  { path: "*", element: <ErrorComponent /> },
];

export { RootRouter };
