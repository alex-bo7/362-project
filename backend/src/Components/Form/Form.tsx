import { useState } from "react";
import "./form.css";
import Checkbox from "../Checkbox/Checkbox";

interface FormProps {
  ToggleWantForm: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [isPaper, setIsPaper] = useState<boolean>(false);
  const [isCardboard, setIsCardboard] = useState<boolean>(false);
  const [isPlastic, setIsPlastic] = useState<boolean>(false);

  function HandleCancel() {
    props.ToggleWantForm();
  }

  function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={HandleSubmit}>
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
        Select all trash your depositing:
      </label>
      <Checkbox labelName="Paper" state={isPaper} setState={setIsPaper} />
      <Checkbox
        labelName="Cardboard"
        state={isCardboard}
        setState={setIsCardboard}
      />
      <Checkbox labelName="Plastic" state={isPlastic} setState={setIsPlastic} />

      <div className="form-btns">
        <button className="form-btn" onClick={HandleCancel}>
          Cancel
        </button>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
