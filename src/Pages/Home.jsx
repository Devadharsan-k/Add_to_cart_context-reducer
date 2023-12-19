import React, { useContext } from "react";
import { data } from "../Data";
import { CartContext } from "../Context/Context";

const Home = () => {
  const globalState = useContext(CartContext);
  const dispatch = globalState.dispatch;
  console.log(globalState);
  return (
    <>
      <p className="text-xl font-bold p-5">NEW IN</p>
      <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full mb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex border-solid border-2 px-2 m-2 gap-4"
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
                onClick={() => dispatch({ type: "ADD", payload: item })}
                className="h-8 bg-blue-400 px-2 whitespace-nowrap rounded outline-none"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
