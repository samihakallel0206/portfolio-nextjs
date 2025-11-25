import Image from "next/image";
import "./about.css";
const About = () => {
  return (
    <div className="about-container">
      <h2>A propos de moi ...</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            En tant que développeur, j'ai toujours été passionné par la création
            de solutions élégantes et efficaces à des problèmes complexes. Je
            possède de solides bases en développement logiciel, notamment en
            technologies web telles que HTML, CSS et JavaScript. J'aime
            travailler aussi bien sur le front-end que sur le back-end des
            applications, et je suis toujours à la recherche de solutions pour
            optimiser les performances, améliorer l'expérience utilisateur et
            garantir la plus haute qualité de code.
          </p>
          <p>
            Tout au long de ma carrière, j'ai travaillé sur des projets très
            variés, allant de simples sites web statiques à des applications
            d'entreprise complexes. J'ai l'expérience de travailler avec divers
            outils et frameworks de développement, notamment React et Node.js.
            Je suis toujours avide d'apprendre et d'explorer de nouvelles
            technologies et je suis constamment à la recherche d'opportunités
            pour améliorer mes compétences et mes connaissances.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/photo-about.avif"
            className="profile-img"
            width={300}
            height={500}
            alt="ph-about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
