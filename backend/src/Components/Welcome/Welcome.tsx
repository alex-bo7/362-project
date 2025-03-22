import "./welcome.css";

interface WelcomeProps {
  ToggleWantForm: () => void;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <section className="welcome-section">
      <h1>Welcome</h1>
      <button className="welcome-btn" onClick={props.ToggleWantForm}>
        Start Trash Deposit
      </button>
    </section>
  );
};

export default Welcome;
