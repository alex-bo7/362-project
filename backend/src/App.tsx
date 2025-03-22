import { useState } from "react";
import "./app.css";
import Welcome from "./Components/Welcome/Welcome";

const App: React.FC = () => {
  const [wantForm, setWantForm] = useState<boolean>(false);

  function ToggleWantForm(): void {
    setWantForm((currentWantForm) => !currentWantForm);
  }

  return (
    <>
      <main className="app-content-position">
        {!wantForm && <Welcome ToggleWantForm={ToggleWantForm} />}
        {wantForm && <p>form</p>}
      </main>
    </>
  );
};

export default App;
