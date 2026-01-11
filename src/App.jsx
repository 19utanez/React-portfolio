import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShootingStars from "./components/ShootingStars";
import SpotlightSection from "./components/SpotlightSection";
import SkillsGrid from "./components/skills/SkillsGrid";
import Projects from "./components/Projects/Projects";
import RocketFollower from "./components/RocketFollower";

import { useEffect, useState } from "react";

function App() {
  const fullText = "Hi, I'm Ian";
  const typingSpeed = 120;
  const resetDelay = 7000;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, resetDelay);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="app">
      <Navbar />

      <section className="home-sky">
        {/* Background stars */}
        <div className="stars"></div>

        {/* Dynamic shooting stars */}
        <ShootingStars />

        {/* Rocket following the cursor */}
        <RocketFollower />

        <main className="content">

          {/* HERO SECTION */}
          <SpotlightSection>
            <section className="hero">
              <div className="photo-frame">
                <span>Your Photo</span>
              </div>

              <div className="hero-text">
                <h1 className="typing-text">{displayText}</h1>
                <p>
                  Frontend Developer specializing in ReactJS.
                  I build clean, modern, and user-focused web applications.
                </p>
              </div>
            </section>
          </SpotlightSection>

          {/* EXPERIENCE */}
          <SpotlightSection>
            <section className="experience">
              <h2>Experience</h2>
            </section>
          </SpotlightSection>

          {/* SKILLS */}
          <SpotlightSection>
            <section className="skills">
              <h2>Skills</h2>
              <SkillsGrid />
            </section>
          </SpotlightSection>

          {/* PROJECTS */}
          <SpotlightSection>
            {/* Replacing old manual project cards with the new Projects component */}
            <Projects />
          </SpotlightSection>

        </main>
      </section>

      <Footer />
    </div>
  );
}

export default App;
