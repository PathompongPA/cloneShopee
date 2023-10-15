import {
  Content,
  LoginComponent,
  ProductComponent,
  ShowProduct,
} from "../../component";
import ErrorComponent from "../../component/Error";
import { LoginTemplate } from "../../template";
import Main from "../../template/main";

const TitleNavbar = [
  {
    path: "/",
    title: "logo",
  },
  {
    path: "/",
    title: "home",
  },
  {
    path: "/product",
    title: "product",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/login",
    title: "login",
  },
  {
    path: 0,
    title: "logout",
  },
];

const RootRouter = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Content /> },
      { path: "home", element: <ProductComponent /> },
      { path: "product", element: <ProductComponent /> },
      { path: "product/:id/:name", element: <ShowProduct /> },
      { path: "about", element: <Content /> },
    ],
  },
  {
    path: "/",
    element: <LoginTemplate />,
    children: [{ path: "login", element: <LoginComponent /> }],
  },
  { path: "*", element: <ErrorComponent /> },
];

export { TitleNavbar, RootRouter };
