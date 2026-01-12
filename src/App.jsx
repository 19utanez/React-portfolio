import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShootingStars from "./components/ShootingStars";
import SpotlightSection from "./components/SpotlightSection";
import SkillsGrid from "./components/skills/SkillsGrid";
import Projects from "./components/Projects/Projects";
import RocketFollower from "./components/RocketFollower";
import Experience from "./components/Experience/Experience";
import gradPic from "./assets/grad_pic.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaReact, FaMobileAlt } from "react-icons/fa";

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

          {/* HERO / Profile Section */}
          <SpotlightSection>
            <section id="profile" className="hero">
              {/* Photo frame */}
              <div className="photo-frame">
                <img
                  src={gradPic}
                  alt="Ian Lemuel U."
                  className="intro-photo"
                />
              </div>

              {/* Text content */}
              <div className="hero-text">
                <h1 className="typing-text">{displayText}</h1>

                <div className="hero-subtext">
                  <p className="hero-line">
                    <strong>Ian Lemuel A. Utañez</strong>, 22 years old, Junior Developer
                  </p>

                  <p className="hero-line">
                    <FaReact className="icon react-icon" /> ReactJS &nbsp;
                    <FaMobileAlt className="icon mobile-icon" /> React Native
                  </p>

                  <p className="hero-line">
                    <FaGraduationCap className="icon grad-icon" /> BSIT, TIP Manila
                  </p>

                  <p className="hero-line">
                    <FaMapMarkerAlt className="icon location-icon" /> Based in Manila, Philippines
                  </p>

                  <p className="hero-line">
                    <FaEnvelope className="icon email-icon" />
                    <a href="mailto:ianutanez.it@gmail.com"> ianutanez.it@gmail.com</a>
                  </p>
                </div>

                <p className="hero-bio">
                  Passionate about building web and mobile applications, I have 2 years of web development experience and over a year in mobile development. I enjoy front-end design, dabble in back-end work, and am always eager to learn and take on new challenges.
                </p>
              </div>
            </section>
          </SpotlightSection>

          {/* EXPERIENCE SECTION */}
          <SpotlightSection>
            <section id="experience">
              <Experience />
            </section>
          </SpotlightSection>

          {/* SKILLS SECTION */}
          <SpotlightSection>
            <section id="skills" className="skills">
              <h2>Skills</h2>
              <SkillsGrid />
            </section>
          </SpotlightSection>

          {/* PROJECTS SECTION */}
          <SpotlightSection>
            <section id="projects">
              <Projects />
            </section>
          </SpotlightSection>

        </main>
      </section>

      <Footer />
    </div>
  );
}

export default App;
