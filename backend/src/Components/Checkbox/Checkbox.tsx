import React from "react";

import "./checkbox.css";

interface CheckboxProps {
  labelName: string;
  state: boolean;
  setState: (state: boolean) => void; // callback when state changes
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  function HandleCheckedChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.setState(event.target.checked);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={props.state}
        onChange={HandleCheckedChange}
        className="checkbox-input"
        name={props.labelName}
        id={props.labelName}
      />
      <label htmlFor={props.labelName} className="trash-label">
        {props.labelName}
      </label>
    </div>
  );
};

export default Checkbox;
