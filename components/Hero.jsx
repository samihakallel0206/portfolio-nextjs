

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="profile-img"
        width={300}
        height={300}
        alt="Sam'photo"
      />
      <div className="hero-text">
        <h1>Bonjour je suis samiha 👋</h1>
        <p>
          Je me présente, Samiha Kallel, Ingénieur en informatique depuis 2000,
          j'ai une passion pour l'enseignement et le contact humain, c'est pour
          cela que j'ai choisis d'être INSTRUCTOR chez GOMYCODE....
        </p>
        <div className="icon-social">
          <a
            href=""
            aria-label="Twitter"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href=""
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href=""
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
