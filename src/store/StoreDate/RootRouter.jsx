import { ProductListComponent, FavoriteComponent, CartComponent, LoginComponent, ErrorComponent } from "../../Components";
import { HomeTemplate, ProductTemplate, LoginTemplate } from "../../Templates";

const RootRouter = [
    {
        path: "/",
        element: <HomeTemplate />,
        children: [
            { path: "", element: <ProductListComponent /> },
            { path: "home", element: <ProductListComponent /> },
            { path: "product", element: <ProductListComponent /> },
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