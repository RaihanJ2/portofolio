// import { useState } from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import SectionTitle from "../Layout/SectionTitle";
import Grid from "../Layout/Grid";
import "./Projects.css";
import colorv from "../../assets/img/project/colorv.png";
import kshop from "../../assets/img/project/k-shop.png";
import chatterbox from "../../assets/img/project/chatterbox.png";
import { useState } from "react";

function Projects() {
  const [activeFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "ColorV",
      category: "web",
      image: colorv,
      description:
        "ColorV generates color palettes either randomly or based on an image, helping developers effortlessly create well-balanced and visually appealing color schemes.",
      demoLink: "https://colorv.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/colorv",
      aosDelay: 0,
    },
    {
      id: 2,
      title: "K-Shop",
      category: "Ecommerce",
      image: kshop,
      description:
        "K-Shop is a fully functional e-commerce website built with React and Node.js, featuring user authentication, product management, and a secure payment gateway.",
      demoLink: "https://k-shop-rouge.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/K-Shop",
      aosDelay: 100,
    },
    {
      id: 3,
      title: "Chatterbox",
      category: "AIchatbot",
      image: chatterbox,
      description: "Modern portfolio design with responsive layouts",
      demoLink: "https://chatterbox-ebon-theta.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/chatterbox",
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
        <div className="projects-filter" data-aos="fade-up"></div>

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
