function reducer(state, action) {
  switch (action.type) {
    case "increase":
      if (
        state.count === state.ProductDummy.products[action.payload - 1].stock
      ) {
        return state;
      }
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
            path: 0,
            title: "logout",
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

    case "setShowProduct":
      return {
        ...state,
        ShowProduct: action.payload,
      };

    case "clearShowProduct":
      return {
        ...state,
        ShowProduct: undefined,
      };

    case "add-Favorite":
      if (state.Favorite === undefined) {
        return {
          ...state,
          Favorite: [action.payload],
        };
      }

      if (
        state.Favorite.findIndex(
          (element) => element.id === action.payload.id
        ) !== -1
      ) {
        return {
          ...state,
          Favorite: state.Favorite.filter(
            (element) => element.id !== action.payload.id
          ),
        };
      }

      return {
        ...state,
        Favorite: [...state.Favorite, action.payload],
      };

    case "delete-Favorite":
      return {};

    default:
      return state;
  }
}
export { reducer };
