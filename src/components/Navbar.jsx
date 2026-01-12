import { useEffect, useState } from "react";
import { FaUser, FaBriefcase, FaTools, FaProjectDiagram } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isTop, setIsTop] = useState(true); // detects if at top of page

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsTop(scrollPos < 100); // horizontal top navbar when at top

      const sections = ["home", "profile", "experience", "skills", "projects"];
      let foundSection = "home"; // default section

      // Check each section using getBoundingClientRect
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          const topVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.5;
          const bottomVisible = rect.bottom > window.innerHeight * 0.25;

          if (topVisible || bottomVisible) {
            foundSection = sec;
            break; // stop at first visible section
          }
        }
      }

      setActiveSection(foundSection);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section on click and immediately highlight it
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id); // immediate glow update
    }
  };

  // Navbar items with icons
  const navItems = [
    { id: "profile", icon: <FaUser />, label: "Profile" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience" },
    { id: "skills", icon: <FaTools />, label: "Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  ];

  return (
    <nav className={isTop ? "navbar-horizontal" : "navbar-vertical"}>
      <h2 className="logo" onClick={() => scrollToSection("home")}>
        {isTop && "MyPortfolio"}
      </h2>

      <ul>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => scrollToSection(item.id)}
          >
            {item.icon} {isTop && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
