import { useState } from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import SectionTitle from "../Layout/SectionTitle";
import Grid from "../Layout/Grid";
import "./Projects.css";
import colorv from "../../assets/img/project/colorv.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: colorv,
      description:
        "A fully responsive e-commerce platform built with React and Node.js",
      demoLink: "#",
      codeLink: "https://github.com/RaihanJ2/colorv",
      aosDelay: 0,
    },
    {
      id: 2,
      title: "Task Management App",
      category: "app",
      image: "/api/placeholder/400/320",
      description:
        "A task management application with drag-and-drop functionality",
      demoLink: "#",
      codeLink: "#",
      aosDelay: 100,
    },
    {
      id: 3,
      title: "Portfolio Design",
      category: "design",
      image: "/api/placeholder/400/320",
      description: "Modern portfolio design with responsive layouts",
      demoLink: "#",
      codeLink: "#",
      aosDelay: 200,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "web",
      image: "/api/placeholder/400/320",
      description: "Weather forecasting app that uses external API data",
      demoLink: "#",
      codeLink: "#",
      aosDelay: 0,
    },
    {
      id: 5,
      title: "Mobile Game UI",
      category: "design",
      image: "/api/placeholder/400/320",
      description: "UI/UX design for a mobile game application",
      demoLink: "#",
      codeLink: "#",
      aosDelay: 100,
    },
    {
      id: 6,
      title: "Social Media App",
      category: "app",
      image: "/api/placeholder/400/320",
      description: "A social networking application with messaging features",
      demoLink: "#",
      codeLink: "#",
      aosDelay: 200,
    },
  ];

  const filterProjects = (projects, filter) => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.category === filter);
  };
  const filteredProjects = filterProjects(projectsData, activeFilter);

  return (
    <section className="projects section-padding" id="projects">
      <ContainerLayout>
        <SectionTitle
          title="My Projects"
          subTitle="Check out some of my work"
        />
        <div className="projects-filter" data-aos="fade-up">
          <button
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={activeFilter === "web" ? "active" : ""}
            onClick={() => setActiveFilter("web")}
          >
            Web
          </button>
          <button
            className={activeFilter === "app" ? "active" : ""}
            onClick={() => setActiveFilter("app")}
          >
            Apps
          </button>
          <button
            className={activeFilter === "design" ? "active" : ""}
            onClick={() => setActiveFilter("design")}
          >
            Design
          </button>
        </div>

        <Grid>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-item"
              data-aos="fade-up"
              data-aos-delay={project.aosDelay}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt">Demo</i>
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code">Code</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </ContainerLayout>
    </section>
  );
}

export default Projects;
