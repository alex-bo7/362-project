import useFetch from "../../hooks/useFetch";
import "./user.css";

const User: React.FC = () => {
  const db = useFetch("http://localhost:3000/users");

  return (
    <section className="user-section">
      <img
        src="/images/default-pfp.png"
        alt="user-profile-picture"
        className="user-pfp"
      />
      <h2>Hello, User</h2>
      <p>Points: </p>
      <button>Redeem Points</button>
    </section>
  );
};

export default User;
