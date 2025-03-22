import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import SignupForm from "../components/Forms/SignupForm";

interface SignupPageProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
}

export default function SignupPage(props: SignupPageProps) {
  return (
    <>
      <Nav isLoggedIn={props.isLoggedIn} />
      <main className="main-full-height">
        <SignupForm HandleLogin={props.handleLogin} />
      </main>
      <Footer />
    </>
  );
}
