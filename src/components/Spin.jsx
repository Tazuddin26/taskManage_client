import React, { useState } from "react";
import FilterCategory from "./FilterCategory";
import "./Spinner.css";
import congratulations from "../assets/congrates.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Arts & Craft",
  "Nature",
  "Family",
  "Sport",
  "Friends",
  "Meditation",
  "Study",
];
const Spin = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [rotation, setRotation] = useState(0);

  const handleSpinWheel = () => {
    const segmentAngle = 360 / categories.length;
    const randomIndex = Math.floor(Math.random() * categories.length);
    const extraSpin = 5 * 360;
    const finalRotation =
      extraSpin + (360 - randomIndex * segmentAngle - segmentAngle / 2);

    setRotation(finalRotation);
    setIsSpinning(true);

    setTimeout(() => {
      setWinner(categories[randomIndex]);
      setIsSpinning(false);
    }, 4000);
  };
  return (
    <div className="lg:mx-10 bg-white rounded-md shadow-xl">
      <div className="lg:flex justify-between items-center space-y-2 lg:space-y-0 p-4 relative ">
        <h2 className="text-2xl font-bold">Spin Wheel</h2>
        <div className="space-y-2 ">
          {/* <p className="text-gray-700">Select Category</p> */}
          <FilterCategory />
        </div>
      </div>
      <hr className="mx-4 border-gray-400" />

      <div className="px-3 py-4 cursor-pointer">
        <div className="spinner-container ">
          <div className="spinner-pointer" />
          <div className="circle-dot"></div>
          <div
            className="spinner-wheel "
            style={{
              transform: `rotate(-${rotation}deg)`,
              transition: isSpinning ? "transform 4s ease-out" : "none",
            }}
          >
            {categories.map((cat, index) => {
              const rotate = index * (360 / categories.length);
              const bgColor = `hsl(${
                (index * 360) / categories.length
              }, 80%, 60%)`;
              return (
                <div
                  key={index}
                  className="spinner-segment "
                  style={{
                    transform: `rotate(-${rotate}deg) skewY(35deg)`,
                    background: bgColor,
                  }}
                >
                  <span className="spinner-label">{cat}</span>
                  <span className="spinner-dot shadow-2xl shadow-green-500"></span>
                </div>
              );
            })}
          </div>

          <div className="items-center mt-16 space-y-4 ">
            <div className="">
              <div className="text-center font-bold">
                {winner ? `${winner}` : "Spin Wheel to pick Your Task"}
                {winner && (
                  <Lottie
                    animationData={congratulations}
                    loop={false}
                    className="absolute top-0"
                  />
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-[#60E5AE] btn px-14"
                onClick={handleSpinWheel}
                disabled={isSpinning}
              >
                {" "}
                Spin
              </button>
              <button
                onClick={() => navigate(`/home`)}
                className="bg-[#60E5AE] btn px-10"
              >
                Go To Task
              </button>
            </div>
          </div>
          {/* {winner && ( */}
          {/* <div className="winner-text mt-10 w-full flex justify-center h-[40px] text-gary-700 ">
            <strong>{winner} </strong>
          </div> */}
          {/* )}  */}
        </div>
      </div>
    </div>
  );
};

export default Spin;
