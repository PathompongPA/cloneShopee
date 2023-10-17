let initial = {
  count: 0,
  isState: false,
  user: "admin",
  password: "",
  isLogin: false,
  product: [{ id: 1, name: "", quantity: 0 }],
  titleNavbar: [
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
      path: "/favorite",
      title: "favorite",
    },
    {
      path: "/cart",
      title: "cart",
    },
  ],
};
export { initial };
