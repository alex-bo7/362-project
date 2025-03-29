import { useState } from "react";
import "./form.css";
import Checkbox from "../Checkbox/Checkbox";

const Form: React.FC = () => {
  const [isTrash, setIsTrash] = useState<boolean>(false);
  console.log(isTrash);

  return (
    <form action="/" className="form">
      <label htmlFor="email" className="form-label">
        Enter email:
      </label>
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        className="form-input"
      />

      <label htmlFor="trash-selection" className="form-label">
        Check all trash your depositing:
      </label>
      <Checkbox labelName="trash 1" state={isTrash} setState={setIsTrash} />

      <div className="form-btns">
        <button className="form-btn">Cancel</button>
        <button className="form-btn">Submit</button>
      </div>
    </form>
  );
};

export default Form;
