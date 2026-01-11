import { useState, useEffect } from "react";

// Import your 4 images for Project One
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

export default function Projects() {
  // Define your projects
  const projects = [
    {
      title: "Capstone Project: WatchTower",
      description:
        "WatchTower is an emergency reporting platform with dedicated mobile and web access. The citizen app lets users report incidents and share their location for quick assistance, while the rescuer app notifies verified responders in real-time to act efficiently. The web-based admin portal allows administrators to manage reports, monitor activities, and coordinate responses. Together, WatchTower streamlines emergency communication, improving safety and response times for communities.",
      images: [img1, img2, img3, img4], // slideshow images for Project One
    },
    {
      title: "Project Two",
      description:
        "WatchTower is an emergency reporting platform with dedicated mobile and web access. The citizen app lets users report incidents and share their location for quick assistance, while the rescuer app notifies verified responders in real-time to act efficiently. The web-based admin portal allows administrators to manage reports, monitor activities, and coordinate responses. Together, WatchTower streamlines emergency communication, improving safety and response times for communities.",
      images: [], // No images for Project Two, handled separately
    },
  ];

  // State to track current image for each project
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(projects.length).fill(0)
  );

  // Slideshow effect (only applies if project has images)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev.map((index, i) =>
          projects[i].images.length > 0
            ? (index + 1) % projects[i].images.length
            : 0
        )
      );
    }, 2500); // change image every 2.5s

    return () => clearInterval(interval);
  }, [projects]);

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${
              index % 2 === 0 ? "left-frame" : "right-frame"
            }`}
          >
            <div className="project-frame">
  {/* Only render slideshow if images exist */}
  {project.images.length > 0 && (
    <img
      src={project.images[currentImageIndex[index]]}
      alt={index === 0 ? `${project.title} Slide` : ""}
      className="project-slide"
    />
  )}

  {/* Tech stack label only for Project One */}
  {index === 0 && <span className="project-stack">MERN</span>}

  {/* Project title at bottom-left */}
  <span className="project-title">{project.title}</span>
</div>


            <div className="project-info">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
