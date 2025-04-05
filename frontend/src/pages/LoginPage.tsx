import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Forms/LoginForm";
import Nav from "../components/Nav/Nav";

interface LoginPageProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
  setUserId: (state: string) => void;
}

export default function LoginPage(props: LoginPageProps) {
  return (
    <>
      <Nav isLoggedIn={props.isLoggedIn} />
      <main className="main-full-height">
        <LoginForm
          HandleLogin={props.handleLogin}
          setUserId={props.setUserId}
        />
      </main>
      <Footer />
    </>
  );
}
