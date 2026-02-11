function Skills() {
  const skills = [
    "Magento 2 (Custom Modules & Theme Dev)",
    "Magento PWA Studio (React)",
    "PHP & CodeIgniter (MVC)",
    "Shopify (Liquid)",
    "GraphQL & REST APIs",
    "MySQL & DB Design",
    "HTML, CSS, Bootstrap",
    "JavaScript, jQuery, AJAX",
    "Git & GitHub",
    "Performance Optimization"
  ];

  return (
    <section>
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
