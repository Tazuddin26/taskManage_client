import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const UseSelectOption = ({ options, label }) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full lg:max-w-xs text-gray-700">
      <label className="font-bold">{label}</label>
      <button
        defaultValue="Select Task"
        className=" w-full border border-gray-300 rounded mt-2 px-4 py-2 flex justify-between items-center bg-white shadow-sm hover:border-blue-500 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : "Select Task"}</span>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp size={20} />
        ) : (
          <MdOutlineKeyboardArrowDown size={20} />
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white/20 backdrop-blur-sm rounded-md shadow-xl">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-3 py-2 hover:bg-[#60E5AE26]"
            >
              <input
                type="checkbox"
                name="status"
                className="checkbox checkbox-sm checkbox-success border-gray-300 "
                checked={selected === option}
                onChange={(e) => {
                  handleSelectOption(option);
                }}
              />
              <p className="ml-2 text-sm">{option}</p>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseSelectOption;
