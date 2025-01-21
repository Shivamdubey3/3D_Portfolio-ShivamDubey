import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  // Define the list of projects
  const projects = [
    {
      name: "treehouseindia.in",
      category: "Development",
      tools: "Javascript, TypeScript, HTML,Tailwind CSS, CSS, PHP",
      image: "/images/Treehouse.png",
      link: "https://treehouseindia.in/",  // Add project link
    },
    {
      name: "Rvaastu Property Discovery",
      category: "Real Estate",
      tools: "HTML, PHP, Tailwind CSS, JavaScript,CSS",
      image: "/images/Rvaastu.png",
      link: "https://rvaastu.com/",  // Add project link
    },
    // // {
    // //   name: "GoGetter Mobile App",
    // //   category: "Productivity",
    // //   tools: "Flutter, Dart, Firebase",
    // //   image: "/images/GoGetter.png",
    // //   link: "https://play.google.com/store/apps/details?id=com.future18.gogetter",  // Add project link
    // // },
    // {
    //   name: "TreeHouse Community",
    //   category: "Community Building",
    //   tools: "React, Node.js, Express, MongoDB",
    //   image: "/images/TreeHouseCommunity.png",
    //   link: "https://treehouseindia.in/",  // Add project link
    // },
    {
      name: "GURUKRUPA PLACEMENT & EDUCATION SOLUTIONS PVT LTD",
      category: "Business",
      tools: "JavaScript, CSS, PHP, HTML, Tailwind CSS",
      image: "/images/GuruKrupa.png",
      link: "https://gurukrupaeducation.com/",  // Add project link
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.name}</h4>
                      <p>Category: {project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
                <WorkImage image={project.image} alt={`Project ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
