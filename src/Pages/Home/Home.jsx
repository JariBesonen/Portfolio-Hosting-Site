import "./Home.css";
function Home() {
  return (
    <main className="home-page-wrapper">
      <section className="hero-section">
        <div className="img-placeholder">img</div>
        <div className="hero-info-wrapper">
          <p>Jari Besonen</p>
          <h2>Full Stack Developer</h2>
          <span>Web experiences with polish, purpose, and presence.</span>
          <div className="hero-info-button-wrapper">
            <button className="view-projects-btn">View Projects</button>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </section>
      <section className="tech-stack-section">
        <h3>Capabilities</h3>
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Database</li>
          <li>Dev</li>
        </ul>
        <div className="tech-stack-icon-wrapper">
          <div className="icon-placeholder"></div>
        </div>
      </section>
      <section className="project-one-section">
        <div className="project-one-img-placeholder">vesper tela img</div>
        <p>VESPER TELA</p>
        <span>
          Vesper Tela is a Balenciaga-inspired fashion e-commerce concept built
          for my portfolio. Minimal, bold, and editorial—like a digital fashion
          magazine.
        </span>
        <div className="project-one-btn-wrapper">
          <button className="project-one-view-live-btn">View Live</button>
          <button className="project-one-github-repo-btn">Github Repo</button>
        </div>
      </section>
      <section className="project-two-section">
        <div className="project-two-img-placeholder">dragondropengine img</div>
        <p>Dragon Drop Engine</p>
        <span>
          DragonDropEngine is a creator-friendly 2D game engine concept built
          for my portfolio. Clean, powerful, and modern.
        </span>
        <div className="project-two-btn-wrapper">
          <button className="project-two-view-live-btn">View Live</button>
          <button className="project-two-github-repo-btn">Github Repo</button>
        </div>
      </section>
      <section className="about-section">
        <p>About Me</p>
        <span>description about myself</span>
      </section>
      <section className="contact-section">
        <p>Let's get in touch</p>
      </section>
      <footer></footer>
    </main>
  );
}
export default Home;
