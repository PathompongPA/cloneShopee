import {
  CartComponent,
  ErrorComponent,
  FavoriteComponent,
  LoginComponent,
  ProductComponent,
} from "../../component";
import { HomeTemplate, LoginTemplate, ProductTemplate } from "../../template";

const RootRouter = [
  {
    path: "/",
    element: <HomeTemplate />,
    children: [
      { path: "", element: <ProductComponent /> },
      { path: "home", element: <ProductComponent /> },
      { path: "product", element: <ProductComponent /> },
      { path: "favorite", element: <FavoriteComponent /> },
      { path: "cart", element: <CartComponent /> },
    ],
  },
  {
    path: "/product/:id/:name",
    element: <ProductTemplate />,
  },
  {
    path: "/",
    element: <LoginTemplate />,
    children: [{ path: "login", element: <LoginComponent /> }],
  },
  { path: "*", element: <ErrorComponent /> },
];

export { RootRouter };
