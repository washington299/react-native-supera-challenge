export const initialState = {
  products: [],
  quantity: 0,
  shipPerProduct: 10,
  total: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (!state.products.find((product) => product.id === action.payload.product.id)) {
        state.products.push({
          ...action.payload.product,
          quantity: 1,
        });
      } else {
        const cacheProduct = state.products.find((product) => (
          product.id === action.payload.product.id
        ));
        cacheProduct.quantity += 1;
        const index = state.products.indexOf(cacheProduct);
        state.products[index] = cacheProduct;
      }

      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + action.payload.product.price,
      };

    case 'REMOVE_PRODUCT': {
      const cacheProduct = state.products.find((product) => (
        product.id === action.payload.product.id
      ));

      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.product.id),
        quantity: state.quantity - cacheProduct.quantity,
        total: state.total - (action.payload.product.price * cacheProduct.quantity),
      };
    }

    case 'INCREASE': {
      const cacheProduct = state.products.find((product) => (
        product.id === action.payload.product.id
      ));

      cacheProduct.quantity += 1;
      const index = state.products.indexOf(cacheProduct);
      state.products[index] = cacheProduct;

      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + action.payload.product.price,
      };
    }

    case 'DECREASE': {
      const cacheProduct = state.products.find((product) => (
        product.id === action.payload.product.id
      ));

      cacheProduct.quantity -= 1;
      const index = state.products.indexOf(cacheProduct);
      state.products[index] = cacheProduct;

      return {
        ...state,
        quantity: state.quantity - 1,
        total: state.total - action.payload.product.price,
      };
    }

    default:
      return state;
  }
};
