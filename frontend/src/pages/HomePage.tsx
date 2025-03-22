import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";

interface HomePageProps {
  isLoggedIn: boolean;
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <Nav isLoggedIn={props.isLoggedIn} />
      <main>
        <Hero />
        <Info />
      </main>
      <Footer />
    </>
  );
}
