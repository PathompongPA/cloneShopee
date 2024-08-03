function reducer(globalState, action) {
  switch (action.type) {
    case "increase-amount-product":
      return handleIncreaseAmountProduct(globalState, action)

    case "decrease-amount-product":
      return handleDecreaseAmountProduct(globalState)

    case "set-amount-product":
      return handleSetAmountProduct(globalState, action)

    case "clear-amount-product":
      return handleClearAmountProduct(globalState, action)

    case "add-to-cart":
      return handleAddToCart(globalState, action)

    case "delete-in-cart":
      console.log("in reducer :", action.payload.id);
      if (globalState.cart !== undefined) {
        if (globalState.cart.findIndex((a) => a.id === action.payload.id) !== -1) {
          const newState = globalState.cart.filter((object) => {
            return object.id !== action.payload.id;
          });
          return {
            ...globalState,
            cart: newState,
          };
        }
      }
      return {
        ...globalState,
        cart: [...globalState.cart, action.payload],
      };
    default:
      return globalState;

    case "toggle-isLogin":
      return {
        ...globalState,
        isLogin: !globalState.isLogin,
      };

    case "login-Success":
      return {
        ...globalState,
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
        ...globalState,
        product: [...globalState.product, action.payload],
      };

    case "setJsonProduct":
      return {
        ...globalState,
        ProductJson: action.payload,
      };

    case "set-product-detail":
      return {
        ...globalState,
        ShowProduct: action.payload,
      };

    case "clear-product-detail":
      return {
        ...globalState,
        ShowProduct: undefined,
      };

    case "delete-Favorite":
      if (action.payload) {
      }
      return {};

    case "add-product-favorite":
      return handleAddProductFavorite(globalState, action)

    // eslint-disable-next-line no-fallthrough
    case "setNumItem":
      if (globalState.numItem + 12 >= globalState.ProductJson.total) {
        return {
          ...globalState,
          numItem: globalState.ProductJson.total,
        };
      }
      return {
        ...globalState,
        numItem: globalState.numItem + 12,
      };

    case "setScrollPosition":
      return {
        ...globalState,
        scrollPosition: action.payload,
      };

  }
}
export { reducer };

function handleAddProductFavorite(globalState, action) {
  let oldProductsFavorite = globalState.productsFavorite
  let newProductFavorite = action.payload
  let productId = newProductFavorite.id
  let isHaveNewProductInProductsFavorite = oldProductsFavorite.findIndex(product => product.id === productId) !== -1
  if (isHaveNewProductInProductsFavorite) {
    let productsFavoriteToggleProductOut = oldProductsFavorite.filter(product => product.id !== productId)
    return {
      ...globalState,
      productsFavorite: productsFavoriteToggleProductOut
    }
  } else {
    oldProductsFavorite.push(newProductFavorite)
    return globalState
  }

}

function handleSetAmountProduct(globalState, action) {
  return {
    ...globalState,
    amountProduct: action.payload
  }

}

function handleIncreaseAmountProduct(globalState) {
  let amountProduct = globalState.amountProduct
  let idProductShow = globalState.ShowProduct.id - 1
  let amountProductStock = globalState.ProductJson.products[idProductShow].stock
  console.log(amountProductStock);
  if (amountProduct < amountProductStock) {
    return {
      ...globalState,
      amountProduct: globalState.amountProduct + 1
    }
  }
  return globalState
}

function handleDecreaseAmountProduct(globalState, action) {
  let amountProduct = globalState.amountProduct
  if (amountProduct > 1) {
    return {
      ...globalState,
      amountProduct: globalState.amountProduct - 1
    }
  }
  return globalState
}

function handleClearAmountProduct(globalState, action) {
  return {
    ...globalState,
    amountProduct: 1
  }
}

function handleAddToCart(globalState, action) {
  let productInCart = globalState.cart
  let product = action.payload
  let productId = product.id
  let productAmountAdded = globalState.amountProduct
  let isHaveProductInCart = FindIdInArray(productInCart, productId)
  if (isHaveProductInCart) {
    globalState.cart = productInCart.map((product) => {
      let id = product.id
      let isHaveProductIdInCart = productId === id
      let amountProductAddLessMoreStock = product.amount + productAmountAdded <= product.stock
      if (isHaveProductIdInCart) {
        if (amountProductAddLessMoreStock) {
          product.amount += productAmountAdded
        }
        else {
          product.amount = product.stock
        }
      }
      return product
    })
  }
  else {
    globalState.cart.push(product)
  }
  return globalState
}

function FindIdInArray(arrayInPut, id) {
  return arrayInPut.findIndex(value => value.id === id) !== -1
}