import useFetch from "../../hooks/useFetch";
import "./user.css";

interface UserProps {
  userId: string;
}

const User: React.FC<UserProps> = (props) => {
  const db = useFetch(`http://localhost:3000/users/${props.userId}`);
  console.log(db);

  return (
    <section className="user-section">
      <img
        src="/images/default-pfp.png"
        alt="user-profile-picture"
        className="user-pfp"
      />
      <h2>Hello, {db.data.email}</h2>
      <p>Points: {db.data.points}</p>
    </section>
  );
};

export default User;
