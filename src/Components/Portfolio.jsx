/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/foto2.jpg";

const imageAltText = "Woman between plants";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI Fundamentals",
    description:
      "On Saturday September 16 was the event Revealing secrets of AI at the Universidad del Valle (BO) in La Paz. In which I had the honor to participate as a speaker giving an introduction to what is artificial intelligence with Azure.",
    url: "https://www.linkedin.com/posts/nataly-gemio-32602a216_on-saturday-september-16-was-the-event-revealing-activity-7111027594635960320-88yj?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Inauguration of R00thouse HackLab La Paz",
    description:
      "The community hosts different communities as part of it and together with different technologies we make more people who like technology join, we also develop soft skills. It is a house of knowledge.",
    url: "https://www.linkedin.com/posts/nataly-gemio-32602a216_lapaz-bolivia-hacking-activity-7102621000332107779-sD8d?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Google I/O Extended El Alto 2023 ",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilitiesGoogle I/O Extended seeks to bring technology enthusiasts together to hear about the latest solutions, products and technology for developers from Google.",
    url: "https://www.linkedin.com/posts/nataly-gemio-32602a216_wtmambassador-google-tech-activity-7102321761509109760-HDVG?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Google I/O Extended La Paz 2023 ",
    description:
      "I have been part of the organization of the Google I/O extended La Paz. It was a wonderful experience to organize an event as big as this and see what the results are. For more experiences like this.",
    url: "https://www.linkedin.com/posts/nataly-gemio-32602a216_wtmambassadors-extended-activity-7096989224318459904-2RkA?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "How to make your 20's profitable and not die trying",
    description:
      "I gave my first talk called how to make your 20's profitable and not die trying in which I have given tips on work, soft skills needed, ways of working and others.",
    url: "https://www.linkedin.com/posts/nataly-gemio-32602a216_tech-event-opportunity-activity-7080571766590320640-GgDk?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "English Teachereeuuwe",
    description:
      "I am currently teaching basic and beginner English to children from 4 to 10 years old.",
    url: "",
  },
  {
    title: "Voleyball Player",
    description:
      "I have been playing volleyball since I was 13 years old and throughout this long journey I have been able to achieve several championships and very important sporting achievements. Includes my experience and design abilities.",
    url: "https://www.instagram.com/p/BsEWPZyA0Oy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    title: "Weigthlifting Player",
    description: "Representing the universidad mayor de san andres since 2018.",
    url: "https://www.instagram.com/p/B4qeCNxgjyt/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
  },
  {
    title: "Pedagogie course",
    description:
      "the 27th auxiliary course of the universidad mayor de san andres took place, in which I participated and was able to acquire the ideal teaching skills for learning.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
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

export default Portfolio;
