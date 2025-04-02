import { useEffect, useState } from "react";
import "./form.css";
import Checkbox from "../Checkbox/Checkbox";
import useFetch from "../../hooks/useFetch";

interface FormProps {
  ToggleWantForm: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [isPaper, setIsPaper] = useState<boolean>(false);
  const [isCardboard, setIsCardboard] = useState<boolean>(false);
  const [isPlastic, setIsPlastic] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("an@gmail.com");
  const [link, setLink] = useState<string>("http://localhost:3000/users");

  const db = useFetch(link);

  async function updateUser(userId: number, newPoints: number) {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ points: newPoints }),
    });

    const data = await response.json();
  }

  function GetUserIndex(): number {
    for (let i = 0; i < db.data.length; ++i) {
      if (db.data[i].email == email) return i;
    }
    return -1;
  }

  function HandleCancel() {
    props.ToggleWantForm();
  }

  function ConvertTrashToPoints(): number {
    let points: number = 0;
    if (isPaper) points += 5;
    if (isCardboard) points += 8;
    if (isPlastic) points += 10;
    return points;
  }

  function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLink((prevLink) => (prevLink += "?email=" + email));
    const userIdx = GetUserIndex();
    const POINTS = ConvertTrashToPoints();
    if (userIdx != -1) {
      const newPoints = db.data[userIdx].points + POINTS;
      updateUser(db.data[userIdx].id, newPoints);
    }
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
