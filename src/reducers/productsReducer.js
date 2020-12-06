export const initialState = {
  products: [],
  quantity: 0,
  shipPerProduct: 10,
  total: 0,
};

export const reducer = (state = initialState, action) => {
  const payloadProduct = action.payload.product;

  switch (action.type) {
    case 'ADD_PRODUCT':
      if (!state.products.find((product) => product.id === payloadProduct.id)) {
        state.products.push({ ...payloadProduct, quantity: 1 });
      } else {
        const cacheProduct = state.products.find((product) => product.id === payloadProduct.id);
        cacheProduct.quantity += 1;
        const index = state.products.indexOf(cacheProduct);
        state.products[index] = cacheProduct;
      }

      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + payloadProduct.price,
      };

    case 'REMOVE_PRODUCT': {
      const cacheProduct = state.products.find((product) => product.id === payloadProduct.id);

      return {
        ...state,
        products: state.products.filter((product) => product.id !== payloadProduct.id),
        quantity: state.quantity - cacheProduct.quantity,
        total: state.total - (payloadProduct.price * cacheProduct.quantity),
      };
    }

    case 'INCREASE': {
      const cacheProduct = state.products.find((product) => product.id === payloadProduct.id);

      cacheProduct.quantity += 1;
      const index = state.products.indexOf(cacheProduct);
      state.products[index] = cacheProduct;

      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + payloadProduct.price,
      };
    }

    case 'DECREASE': {
      const cacheProduct = state.products.find((product) => product.id === payloadProduct.id);

      cacheProduct.quantity -= 1;
      const index = state.products.indexOf(cacheProduct);
      state.products[index] = cacheProduct;

      return {
        ...state,
        quantity: state.quantity - 1,
        total: state.total - payloadProduct.price,
      };
    }

    default:
      return state;
  }
};
