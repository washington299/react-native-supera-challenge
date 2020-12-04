import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from '../reducers/productsReducer';

export const ProductsContext = createContext(initialState);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      { children }
    </ProductsContext.Provider>
  );
};
