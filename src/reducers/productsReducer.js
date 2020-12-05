/* eslint-disable no-param-reassign */
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
      };
    case 'REMOVE_PRODUCT':
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
