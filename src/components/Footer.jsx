import "../CSS/App.css";
const Footer = () => {
  return (
    <footer>
      <a
        className="logo linkFooter"
        href="https://www.linkedin.com/in/franco-adolfo-bottaro"
        target="blank"
      >
        <img src="/linkedin.svg" className="linkImg" alt="LinkedIn" />
      </a>
      {/*  */}
      <a
        className="logo linkFooter"
        href="https://github.com/francoabottaro/Pasarela-pago"
        target="blank"
      >
        <img src="/github.svg" className="linkImg" alt="GitHub" />
      </a>
    </footer>
  );
};

export default Footer;
