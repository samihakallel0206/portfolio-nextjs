import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h2>Contactez moi!</h2>
        <p>
          Si vous souhaitez collaborer, si vous avez des questions ou si vous
          souhaitez que je prenne la parole lors de votre événement, ma boîte
          mail est toujours ouverte. Que je veuille simplement vous dire
          bonjour, je ferai de mon mieux pour vous répondre ! À bientôt !
        </p>
        <form></form>
        <a href="mailto:samkallel@hotmail.fr" className="cv-btn ">
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default Contact;
