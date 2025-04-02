import Nav from "../components/Nav/Nav";
import User from "../components/User/User";

interface AccountProps {
  isLoggedIn: boolean;
}

export default function Account(props: AccountProps) {
  return (
    <>
      <Nav isLoggedIn={props.isLoggedIn} />
      <main>
        <User />
      </main>
    </>
  );
}
