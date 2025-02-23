import "./footer.css";

export default function Footer() {
  const currentYear: string = new Date().getFullYear().toString();

  return (
    <footer>
      <div className="page-component-padding footer">
        <p>&copy;{currentYear} Company Name</p>
      </div>
    </footer>
  );
}
