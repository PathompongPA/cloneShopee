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
      onclick: "",
    },
    {
      path: "/",
      title: "home",
      onclick: "",
    },
    {
      path: "/product",
      title: "product",
      onclick: "",
    },
    {
      path: "/about",
      title: "about",
      onclick: "",
    },
    {
      path: "/login",
      title: "login",
      onclick: "",
    },
  ],
};
export { initial };
