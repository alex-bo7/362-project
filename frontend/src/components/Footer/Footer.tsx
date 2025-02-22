import "./footer.css";

export default function Footer() {
  const currentYear: string = new Date().getFullYear().toString();

  return <footer className="footer">&copy;{currentYear} Company Name</footer>;
}
