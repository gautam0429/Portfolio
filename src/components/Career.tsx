import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Whatsupninja</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Spearheaded development of scalable web applications using the
              MERN stack, improving system architecture efficiency by 35%.
              Designed and deployed 15+ secure RESTful endpoints and optimized
              MongoDB aggregation pipelines for high-traffic modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>JinnieTech Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built 15+ UI modules using React.js, improving rendering
              performance by 18%. Delivered 8+ feature releases within Agile
              sprint cycles and fixed 30+ production issues improving stability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Electronics and Communication Engineering</h4>
                <h5>KIET Group of Institutions</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology. CGPA: 7.0. Gained
              strong foundation in OOPs, DSA, and DBMS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary & Senior Secondary Education</h4>
                <h5>PN National Public School</h5>
              </div>
              <h3>2019-2021</h3>
            </div>
            <p>
              Completed Class 12th (79.6%) and Class 10th (88.4%) under CBSE
              board.
            </p>
          </div>
        </div>

        <div className="career-container" style={{ marginTop: "50px" }}>
          <h2>
            Certifications <span>&</span>
            <br /> Achievements
          </h2>
          <div className="career-info">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Smart India Hackathon 2024</h4>
                  <h5>Front-End Developer</h5>
                </div>
                <h3>2024</h3>
              </div>
              <p>
                <strong>Finalist & Lead Developer:</strong> Engineered an
                immersive user experience by developing a website to showcase
                high-fidelity 3D models with integrated historical and cultural
                information. Built complex responsive layouts (Home, About,
                Contact) and optimized asset delivery for cultural heritage
                preservation.
              </p>
            </div>
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Techno-verse & Endeavour 2024</h4>
                  <h5>Head Coordinator & Lead Anchor</h5>
                </div>
                <h3>2024</h3>
              </div>
              <p>
                <strong>Leadership & Management:</strong> Masterfully
                coordinated 10+ major tech events with over 300+ active
                participants. Anchored prestigious opening and valedictorian
                ceremonies, ensuring seamless event execution and high brand
                engagement through tactical planning and effective team
                leadership.
              </p>
            </div>
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>Full-stack Web Development Certification</h4>
                  <h5>LinkedIn Learning & Advanced Training</h5>
                </div>
                <h3>2024</h3>
              </div>
              <p>
                <strong>Specialized Training:</strong> Completed a rigorous
                30hr+ professional path for Full-Stack Web Development.
                Expertise validated through certifications in:
                <br />
                • <strong>Full-stack Web Development Masterclass</strong> (31 hrs)
                <br />
                • <strong>Java Enterprise Edition</strong> — Backend Architecture (12 hrs)
                <br /> • <strong>React.js Patterns</strong> — Advanced Hooks & Context
                <br /> • <strong>Clean Code JavaScript</strong> — Performance Optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
