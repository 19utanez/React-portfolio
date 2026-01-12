// src/components/Experience/Experience.jsx
import ecsLogo from "../../assets/ecs_logo.png";
import watchtowerLogo from "../../assets/watchtower_logo.png";

export default function Experience() {
  // Define your experiences (Capstone first)
  const experiences = [
    {
      period: "Sept 2024 - Feb 2025",
      role: "Capstone Developer",
      company: "WatchTower Project",
      description:
        "WatchTower is an emergency reporting platform developed by a team of three, inspired by our client, the San Juan NDRRMO. It features a mobile app for citizens (to report incidents) and rescuers (to respond to emergencies), and a web dashboard for admin management. The project is scoped specifically for San Juan City, Philippines. My main contribution was developing the mobile application using React Native, ensuring smooth user interaction and real-time reporting functionality.",
      image: watchtowerLogo, // ✅ Capstone icon
    },
    {
      period: "Feb 2025 - May 2025",
      role: "Network/Server Engineer Intern",
      company: "ISS Department",
      description:
        "Completed On-the-Job Training as part of the Network Team. Assisted in network monitoring, troubleshooting connectivity issues, handling ticketing systems, and supporting IT infrastructure operations.",
      image: ecsLogo, // existing intern logo
    },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            {/* Timeline marker and period */}
            <div className="timeline-marker">
              <span className="timeline-dot"></span>
              <div className="experience-period">{exp.period}</div>
            </div>

            {/* Experience content card */}
            <div className={`experience-content ${exp.role.includes("Intern") ? "intern" : "capstone"}`}>

              {/* ✅ Top-right logo for both Capstone and Intern */}
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.role}
                  className="experience-image"
                />
              )}

              <h3>{exp.role}</h3>
              <span>{exp.company}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
