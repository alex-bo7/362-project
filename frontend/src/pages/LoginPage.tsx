import Footer from "../components/Footer/Footer";
import LoginForm from "../components/Forms/LoginForm";
import Nav from "../components/Nav/Nav";

export default function LoginPage() {
  return (
    <>
      <Nav />
      <main className="main-full-height">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
