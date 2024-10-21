import patternDesktop from "../assets/pattern-divider-desktop.svg";
import patternmobile from "../assets/pattern-divider-mobile.svg";

import dice from "../assets/icon-dice.svg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Main = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  const newAdvice = () => {
    axios
      .get(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      )
      .then((res) => {
        setAdvice(res.data.slip.advice);
        setId(res.data.slip.id);
      });
  };

  useEffect(() => {
    newAdvice();
  }, []);

  return (
    <div className="  w-full h-screen mx-auto flex flex-col justify-center items-center text-center">
      <div className=" relative md:w-[540px] md:h-[332px] w-[343px] h-[347px] rounded-2xl shadow-xl bg-[#313A48] flex flex-col justify-around items-center">
        <p className="text-[#53FFAA] md:text-[13px] text-[11px]  font-extrabold tracking-[4.09px] ">
          ADVICE #{id}
        </p>
        <div className="md:w-[444px] h-auto">
          <h1 className="md:text-[28px] font-bold m-3 text-[24px] text-[#CEE3E9]">
            {advice}
          </h1>
        </div>
        <img
          className="mb-10  mt-3 md:block hidden"
          src={patternDesktop}
          alt="patternDesktop"
        />
        <img
          className="mb-10 mt-3 block md:hidden"
          src={patternmobile}
          alt="patternmobile"
        />
        <button
          onClick={newAdvice}
          className=" top-[90%] absolute w-[64px] h-[64px] rounded-full bg-[#53FFAA] hover:shadow-3xl"
        >
          <img className="mx-auto" src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
};
