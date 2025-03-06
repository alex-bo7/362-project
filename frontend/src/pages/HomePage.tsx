import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Info />
      </main>
      <Footer />
    </>
  );
}
