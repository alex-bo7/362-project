import "./hero.css";

export default function Hero() {
  // TODO: learn-btn scrolls to section(give section ID, then pass #id into href)
  return (
    <section>
      <div className="page-component-padding hero">
        <h1>
          A Cleaner World,{" "}
          <span className="hero-header-newline">
            <br />
          </span>
          A Fuller Wallet
        </h1>
        <p className="hero-text">
          Dispose of trash, earn points, and redeem them for exciting rewards.
          The more you clean, the more you win.
        </p>
        <div>
          <ul className="hero-btns-list">
            <li>
              <a href="/" className="page-btn-links">
                Learn More
              </a>
            </li>
            <li>
              <a href="/signup" className="page-btn-links">
                Start Earning
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
