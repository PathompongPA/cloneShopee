let initial = {
  count: 1,
  isState: false,
  user: "admin",
  password: "",
  numItem: 20,
  isLogin: false,
  product: [{ id: 1, name: "", quantity: 0 }],
  titleNavbar: [
    {
      path: "/",
      title: "logo",
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
