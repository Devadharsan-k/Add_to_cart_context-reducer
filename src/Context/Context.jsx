import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const temp = state.filter((item) => action.payload.name === item.name);
        if (temp.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "REMOVE":
        const temp1 = state.filter((item) => item.name != action.payload.name);
        return temp1;
      default:
        return state;
      case "RESET":
        return [];
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  const info = { state, dispatch };

  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};
