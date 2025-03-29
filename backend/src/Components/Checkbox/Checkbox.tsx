import React from "react";

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
        name="trash1"
      />
      <label htmlFor="trash1" className="trash-label">
        {props.labelName}
      </label>
    </div>
  );
};

export default Checkbox;
