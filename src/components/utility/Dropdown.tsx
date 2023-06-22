import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

export interface Option {
  value: string | number;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  onChange: (option: Option) => void; // Update the type of the onChange prop
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option); // Call the onChange prop with the selected option
  };

  return (
    <div className="custom-dropdown">
      <div className={`dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      {selectedOption ? selectedOption.label : 'Select an option'}
        <AiOutlineArrowDown />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li
              className="dropdown-option"
              key={index}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;