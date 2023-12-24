// Dropdown.js
import React from 'react';

const Dropdown = ({ placeholder, options, onChange, labelKey = "label", valueKey = "value" }) => {
    return (
        <select
            className="m-3 block appearance-none w-full bg-black border border-gray-600 text-white px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-700"
            onChange={onChange}
        >
            <option key={"-1"} value={""}>
                {placeholder}
            </option>
            {options.map((option) => (
                <option key={option[valueKey]} value={option[valueKey]}>
                    {option[labelKey]}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
