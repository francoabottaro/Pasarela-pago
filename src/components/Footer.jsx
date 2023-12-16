import "../CSS/App.css";
const Footer = () => {
  return (
    <footer>
      <div id="LinkedIn"></div>
      <a
        className="linkP logLinkedin"
        href="https://www.linkedin.com/in/franco-adolfo-bottaro"
        target="blank"
      >
        <img src="/linkedin.svg" className="logLinkedin" alt="" />
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
