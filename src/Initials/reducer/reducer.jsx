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
      if (state.count === 1) {
        return { ...state, count: 1 };
      }
      return {
        ...state,
        count: state.count--,
      };

    case "clear-count":
      return {
        ...state,
        count: 1,
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

    case "setJsonProduct":
      return {
        ...state,
        ProductJson: action.payload,
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

    case "delete-Favorite":
      if (action.payload) {
      }
      return {};

    case "add-Favorite":
      if (state.ProductsFavorite === undefined) {
        return {
          ...state,
          ProductsFavorite: [action.payload],
        };
      }
      if (
        state.Favorite.findIndex(
          (element) => element.id === action.payload.id
        ) !== -1
      ) {
        return {
          ...state,
          ProductsFavorite: state.Favorite.filter(
            (element) => element.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        ProductsFavorite: [...state.Favorite, action.payload],
      };

    case "setNumItem":
      if (state.numItem + 12 >= 100) {
        return {
          ...state,
          numItem: 100,
        };
      }
      return {
        ...state,
        numItem: state.numItem + 12,
      };

    case "setScrollPosition":
      return {
        ...state,
        scrollPosition: action.payload,
      };

    case "add-to-cart":
      console.log("in reducer id :", action.payload.id);

      const newState = state;

      if (state.cart === undefined) {
        return {
          ...state,
          cart: [action.payload],
        };
      } else {
        const index = state.cart.findIndex((a) => a.id === action.payload.id);
        if (index !== -1) {
          newState.cart[index].amount += action.payload.amount;
          console.log("amount is : ", newState.cart[index].amount);
          console.log("newState is : ", newState);
          return newState;
        }
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "delete-in-cart":
      console.log("in reducer :", action.payload.id);
      if (state.cart !== undefined) {
        if (state.cart.findIndex((a) => a.id === action.payload.id) !== -1) {
          const newState = state.cart.filter((object) => {
            return object.id !== action.payload.id;
          });
          return {
            ...state,
            cart: newState,
          };
        }
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}
export { reducer };
