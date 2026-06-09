import { useRef } from 'react';
import './styles/Work.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const workFlexRef = useRef<HTMLDivElement>(null);
  const workContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const workFlex = workFlexRef.current;
      const workContainer = workContainerRef.current;
      
      if (!workFlex || !workContainer) return;

      const setTranslateX = () => {
        return workFlex.scrollWidth - workContainer.clientWidth;
      };

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => '+=' + setTranslateX(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(workFlex, {
        x: () => -setTranslateX(),
        ease: 'none',
      });

      return () => {
        timeline.kill();
        ScrollTrigger.getAll().forEach(t => {
          if (t.vars.id === 'work') t.kill();
        });
      };
    },
    { scope: containerRef }
  );

  return (
    <div className='work-section' id='work' ref={containerRef}>
      <div className='work-container section-container' ref={workContainerRef}>
        <h2>
          My <span>Work</span>
        </h2>
        <div className='work-flex' ref={workFlexRef}>
          
          {/* Project 01 */}
          <div className='work-box'>
            <div className='work-info'>
              <div className='work-title'>
                <h3>01</h3>
                <div>
                  <h4>Rover for Rescue and Monitoring</h4>
                  <p>Hardware & Wireless Communication | May 2026</p>
                </div>
              </div>
              <div className='work-details'>
                <p>• Designed and developed an all-terrain rover for disaster management.</p>
                <p>• Integrated thermal cameras and gas sensors for hazard detection.</p>
                <p>• Implemented wireless communication for real-time control.</p>
              </div>
              <h4>Tech Stack</h4>
              <p>Hardware, Wireless Communication, Thermal Imaging, Sensors</p>
            </div>
          </div>

          {/* Project 02 */}
          <div className='work-box'>
            <div className='work-info'>
              <div className='work-title'>
                <h3>02</h3>
                <div>
                  <h4>Uber Clone</h4>
                  <p>Solo Project | June - Aug 2024</p>
                </div>
              </div>
              <div className='work-details'>
                <p>• Engineered core features: user registration, real-time tracking, and payment integration.</p>
                <p>• Developed 18+ REST APIs with JWT authentication for 500+ users.</p>
                <p>• Implemented real-time location tracking updating every 3 seconds using WebSockets.</p>
                <p>• Optimized MongoDB queries reducing latency by 25% and improved UI responsiveness by 30%.</p>
              </div>
              <h4>Tech Stack</h4>
              <p>React js, MongoDB, Node.js, Express.js, Web sockets, CI/CD</p>
            </div>
          </div>

          {/* Project 03 */}
          <div className='work-box'>
            <div className='work-info'>
              <div className='work-title'>
                <h3>03</h3>
                <div>
                  <h4>Explore Heritage</h4>
                  <p>Group Project | June 2023</p>
                </div>
              </div>
              <h4 className='work-role'>Role: Front-end developer</h4>
              <div className='work-details'>
                <p>• Developed a website to showcase 3D models with integrated historical info.</p>
                <p>• Focused on responsive design and seamless cultural data integration.</p>
              </div>
              <h4>Tech Stack</h4>
              <p>HTML, CSS, Reactjs</p>
            </div>
          </div>

          {/* Project 04 */}
          <div className='work-box'>
            <div className='work-info'>
              <div className='work-title'>
                <h3>04</h3>
                <div>
                  <h4>Student-Teacher Appointment Booking</h4>
                  <p>Solo Project | Jan - Feb 2024</p>
                </div>
              </div>
              <div className='work-details'>
                <p>• MERN stack project designed to facilitate booking between students & teachers.</p>
                <p>• Implemented scheduling logic and user management dashboards.</p>
              </div>
              <h4>Tech Stack</h4>
              <p>MongoDB, Express js, React js, Next js, HTML, CSS</p>
            </div>
          </div>

          {/* Project 05 */}
          <div className='work-box'>
            <div className='work-info'>
              <div className='work-title'>
                <h3>05</h3>
                <div>
                  <h4>Sundown-Studio</h4>
                  <p>Solo Project | Nov - Dec 2023</p>
                </div>
              </div>
              <div className='work-details'>
                <p>• Developed a prototype B2B SaaS platform in 25 days.</p>
                <p>• Implemented high-end UI/UX interactions using modern web technologies.</p>
              </div>
              <h4>Tech Stack</h4>
              <p>HTML, CSS, JavaScript, React Js</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
