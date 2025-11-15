// import { useState } from "react";
import ContainerLayout from "../Layout/ContainerLayout";
import SectionTitle from "../Layout/SectionTitle";
import Grid from "../Layout/Grid";
import "./Projects.css";
import colorv from "../../assets/img/project/colorv.png";
import kshop from "../../assets/img/project/k-shop.png";
import chatterbox from "../../assets/img/project/chatterbox.png";
import docsum from "../../assets/img/project/docsum.png";
import postly from "../../assets/img/project/postly.png";
import recca from "../../assets/img/project/recca.png";
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
        "ColorV generates color palettes either randomly or from an uploaded image, helping developers create well-balanced and visually appealing color schemes.",
      demoLink: "https://colorv.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/colorv",
      aosDelay: 0,
    },
    {
      id: 2,
      title: "HelloKids",
      category: "ecommerce",
      image: kshop,
      description:
        "HelloKids is a fully functional e-commerce website built with React and Node.js, featuring authentication, product management, and secure payments.",
      demoLink: "https://hellokids.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/e-commerce",
      aosDelay: 100,
    },
    {
      id: 3,
      title: "Chatterbox",
      category: "AIchatbot",
      image: chatterbox,
      description:
        "Chatterbox is an AI-powered chatbot that provides instant responses and smart assistance to enhance user engagement.",
      demoLink: "https://chatterbox-ebon-theta.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/chatterbox",
      aosDelay: 200,
    },
    {
      id: 4,
      title: "DocSum",
      category: "AIsummarizer",
      image: docsum,
      description:
        "DocSum transforms long documents into clear, concise summaries powered by advanced AI technology.",
      demoLink: "https://docsum-delta.vercel.app/",
      codeLink: "https://github.com/RaihanJ2/docsum",
      aosDelay: 250,
    },
    {
      id: 5,
      title: "Postly",
      category: "fullstack",
      image: postly, // make sure you imported the image
      description:
        "Postly is a full-stack, production-ready blogging platform featuring modern UI, secure multi-auth system, rich text editing, smart tagging, nested comments, and a scalable React + Express + MongoDB architecture.",
      demoLink: "https://your-postly-live-demo-link.com", // update if available
      codeLink: "https://github.com/yourusername/postly", // update if needed
      aosDelay: 300,
    },
    {
      id: 6,
      title: "AI Face Recognition Attendance",
      category: "AI/ComputerVision",
      image: recca, // make sure to import your image
      description:
        "An AI-powered face recognition attendance system featuring zero-shot learning, real-time processing, offline-first architecture, privacy-first design, and a modern React + Flask + InsightFace stack.",
      demoLink: "https://your-live-demo-link.com", // update if available
      codeLink: "https://github.com/yourusername/face-recognition-attendance", // update this
      aosDelay: 350,
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
