import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Context";

const Basket = () => {
  const globalState = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const state = globalState.state;
  const dispatch = globalState.dispatch;
  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      state.forEach((item) => {
        totalPrice += item.price;
      });
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [state]);

  return (
    <div className="grid place-content-center">
      {total === 0 ? (
        <div>
          <p className="mt-5 text-2xl">No items in the basket</p>
        </div>
      ) : (
        <>
          <div className="grid place-content-center">
            <p className="m-5 text-2xl">Total $ {total.toFixed(2)}</p>
            <button
              className="h-8 w-fit mx-auto bg-red-500 text-white px-2 whitespace-nowrap rounded outline-none"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Clear All 💀
            </button>
          </div>
          {state.map((item, index) => (
            <div
              key={index}
              className="flex border-solid border-2 px-2 m-2 gap-4 w-fit"
            >
              <img
                src={item.image}
                alt="Img"
                className="h-[175px] w-[175px] object-cover p-4"
              />
              <div className="grid place-content-center gap-y-3">
                <p className=" font-medium text-lg">{item.name}</p>
                <p>$ {item.price}</p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  className="h-8 bg-red-500 text-white px-2 whitespace-nowrap rounded outline-none"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Basket;
