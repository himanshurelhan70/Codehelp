import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      className="wrapper flex flex-col justify-center items-center bg-[#0f172a] text-[#e5e7eb] w-screen h-screen
    gap-7 font-bold text-2xl"
    >
      <button className="border border-white rounded-xl w-[160px] h-[60px] flex items-center justify-center hover:bg-[#1d8abc] transition-all"
      onClick={() => dispatch(increment())}>Increment</button>
      
      <div className="rounded-full w-[120px] h-[120px] border-2 flex items-center justify-center text-3xl">
        {counter}
      </div>

      <button className="border border-white rounded-xl p-4  w-[160px] h-[60px] flex items-center justify-center hover:bg-[#1d8abc] transition-all"
      onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
