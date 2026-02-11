function Contact() {
  return (
    <section
      style={{
        padding: "50px 20px",
        textAlign: "center",
        background: "#f4f6f8",
        minHeight: "60vh",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Contact Me</h2>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ margin: "15px 0", fontSize: "18px" }}>
          📧 Email:{" "}
          <a
            href="mailto:sohitchauhantmu@gmail.com"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            sohitchauhantmu@gmail.com
          </a>
        </p>

        <p style={{ margin: "15px 0", fontSize: "18px" }}>
          💻 GitHub:{" "}
          <a
            href="https://sohit11.github.io/sohit-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            View Portfolio
          </a>
        </p>

        <p style={{ margin: "15px 0", fontSize: "18px" }}>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sohit-chauhan-b10033108"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Visit LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
