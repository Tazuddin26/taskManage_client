import { useState } from "react";
const options = [
  "Arts & Craft",
  "Nature",
  "Family",
  "Sport",
  "Friends",
  "Meditation",
];
const FilterCategory = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <div
        defaultValue="Pick a color"
        className="select"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected : "Select Task Category"}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-xl">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-3 py-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                name="singleCategory"
                className="checkbox checkbox-sm checkbox-success border-gray-300 "
                checked={selected === option}
                onChange={() => handleSelectOption(option)}
              />
              <p className="ml-2">{option}</p>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCategory;
