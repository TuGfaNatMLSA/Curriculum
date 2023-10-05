import React from "react";

import image from "../images/cer.jpg";
const imageAltText = "Woman with certification";

const projectList = [
  {
    title: "Pedagogie course",
    description:
      "the 27th auxiliary course of the universidad mayor de san andres took place, in which I participated and was able to acquire the ideal teaching skills for learning.",
    url: "",
  },
  {
    title: "Computer Science",
    description:
      "Student of Computer Science in Universidad Mayor de San Andres, I am currently in the 9th semester.",
    url: "",
  },
  {
    title: "AI Fundamentals Microsoft",
    description: "Course created by Microsoft in its learning paths.",
    url: "",
  },
  {
    title: "English Language ",
    description:
      "Studied in CETI (Centro de ensenianza y traduccion de idiomas) La Paz - Bolivia 2022.",
    url: "",
  },
  {
    title: "German Language",
    description: "Studied in Goethe Institut La Paz Bolivia 2017.",
    url: "",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
