import profile from "../assets/profile.jpg";

function Header() {
  return (
    <div className="hero">
      <div>
        <img src={profile} alt="Sohit Chauhan" className="profile-img" />
      </div>

      <div className="hero-right">
        <h1>Sohit Chauhan</h1>
        <h3>PHP | Magento Developer</h3>
        <p>3.5+ Years Experience in Magento 2 & eCommerce Development</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href={`${process.env.PUBLIC_URL}/sohit-resume.pdf`} download className="btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
