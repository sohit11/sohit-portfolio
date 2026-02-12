const Projects = () => {
  const projects = [
    {
      title: "Rosemary & Co",
      desc: "Developed and customized a full-scale Magento 2 eCommerce platform for premium art brushes. Implemented custom modules, theme enhancements, performance optimizations, and UX improvements to ensure scalability and a visually engaging storefront tailored for artists and creative professionals.",
      tech: [
        "Magento 2",
        "PHP",
        "JavaScript",
        "jQuery",
        "MySQL",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Abode Designs",
      desc: "Built and customized a Magento 2 eCommerce platform for kitchen and washroom fittings. Implemented advanced product filtering, layered navigation, attribute-based configurations, and multiple module integrations to enhance product discoverability and user experience.",
      tech: [
        "Magento 2",
        "PHP",
        "JavaScript",
        "jQuery",
        "MySQL",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Pronteau – Abode Design Store",
      desc: "Developed a Magento 2 store specializing in multifunctional taps and washroom solutions. Implemented configurable products with dynamic swatches, automatic minimum pricing display, category tab navigation, and backend attribute management for flexible product configuration.",
      tech: [
        "Magento 2",
        "PHP",
        "JavaScript",
        "jQuery",
        "MySQL",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "The Goodie Box",
      desc: "Developed a Shopify-based eCommerce store offering curated product boxes. Customized Liquid templates, optimized storefront UI, implemented secure checkout, and ensured GDPR-compliant data handling and secure payment integration.",
      tech: [
        "Shopify Admin Panel",
        "Liquid Template Engine",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      title: "Babsi's (babsi.at)",
      desc: "Led migration of a live eCommerce store from Shopware to Shopify including products, categories, variants, and media assets. Performed theme customization, implemented custom code solutions, optimized variant image handling, and configured multi-level navigation and newsletter integrations.",
      tech: [
        "Shopify Admin Panel",
        "Liquid Template Engine",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      title: "Company Home Project",
      desc: "Developed a dynamic business website using CodeIgniter (MVC architecture). Implemented secure contact forms, AJAX-based dynamic content loading, SEO-friendly structure, and responsive UI design to ensure scalability and maintainability.",
      tech: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "AJAX"
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
