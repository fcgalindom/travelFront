import React from 'react';

const SelectComponent = ({ options, onChange }) => {
  return (
    <div className='justify-content-center d-flex w-100'>
      <select className="form-select w-50" onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    </div>
    
  );
};

export default SelectComponent;