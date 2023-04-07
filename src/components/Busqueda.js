import React from 'react';

const SelectComponent = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;