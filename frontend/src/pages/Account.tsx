import Nav from "../components/Nav/Nav";

interface AccountProps {
  isLoggedIn: boolean;
}

export default function Account(props: AccountProps) {
  return (
    <>
      <Nav isLoggedIn={props.isLoggedIn} />
      <main>
        <h2>Hello, user</h2>
      </main>
    </>
  );
}
