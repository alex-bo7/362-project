import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import SignupForm from "../components/Forms/SignupForm";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <main className="main-full-height">
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
