function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count++,
      };

    case "decrease":
      if (state.count === 0) {
        return { ...state, count: 0 };
      }
      return {
        ...state,
        count: state.count--,
      };

    case "clear-count":
      return {
        ...state,
        count: 0,
      };

    case "toggle-isLogin":
      return {
        ...state,
        isLogin: !state.isLogin,
      };

    case "login-Success":
      return {
        ...state,
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
            path: "/",
            title: "logout",
            onclick: "LogoutFunction",
          },
        ],
      };

    case "test":
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case "setDateProduct":
      return {
        ...state,
        ProductDummy: action.payload,
      };

    default:
      return state;
  }
}
export { reducer };
