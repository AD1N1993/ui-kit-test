import React from "react";

interface ICheckbox {
  label: string,
  onChange: (value: boolean) => void,
  isChecked: boolean,
  id: string
}

const Checkbox: React.FC<ICheckbox> = ({label, onChange, isChecked, id}) => (
  <label htmlFor={id}>
    <input type="checkbox" checked={isChecked} id={id} onChange={(e) => onChange(e.target.checked)}/>
    <span>{label}</span>
  </label>

);

export default Checkbox
