export const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload.products],
        quantity: state.quantity + 1,
      };
    case 'REMOVE_PRODUCT':
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
