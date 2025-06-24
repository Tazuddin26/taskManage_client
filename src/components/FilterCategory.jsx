import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const options = [
  "All Category",
  "Arts & Craft",
  "Nature",
  "Family",
  "Sport",
  "Friends",
  "Meditation",
];
const FilterCategory = ({ categoryFilter, setCategoryFilter }) => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option) => {
    setSelected(option);
    setCategoryFilter(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <button
        defaultValue="Select Task Category"
        className=" w-full border border-gray-300 rounded px-4 py-2 flex justify-between items-center bg-white shadow-sm hover:border-blue-500 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* {selected ? selected : "Select Task Category"} */}
        <span>{selected ? selected : "Select Task Category"}</span>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp size={20} />
        ) : (
          <MdOutlineKeyboardArrowDown size={20} />
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white/10 backdrop-blur-sm rounded-md shadow-xl">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-3 py-2 hover:bg-[#60E5AE26]"
            >
              <input
                type="checkbox"
                name="category"
                className="checkbox checkbox-sm checkbox-success border-gray-300 "
                checked={selected === option}
                value={option}
                onChange={(e) => {
                  handleSelectOption(option);
                  setCategoryFilter(option);
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

export default FilterCategory;
