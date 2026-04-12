import React, { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add fade-in animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      .about-section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      .about-section.fade-in {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className="about-title">Meet the Innovator</h2>
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img
              src="/assets/images/Richard Nsor.png"
              alt="Innovator Portrait"
            />
          </div>
          {/* Description Section */}
          <div className="about-description">
            <div className="about-text text-left">
              <h3>Mr. Richard Nsor</h3>
              <p>
                A male entrepreneur from Bosomkyekye, Ashanti Region, addressing
                environmental pollution caused by plastic waste by creating
                petrol and diesel from waste materials like plastic bottles and
                bags. His solution aims to reduce pollution while providing a
                healthier environment.
              </p>
            </div>
            <div className="mission-blocks-container">
              <div className="mission-block">
                <div className="mission-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Mission</h4>
                <p>
                  To apply scientific knowledge to convert plastic waste into
                  high-quality fuel through energy-efficient processes like
                  pyrolysis, reducing environmental pollution.
                </p>
              </div>
              <div className="mission-block">
                <div className="mission-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h4>Vision</h4>
                <p>
                  To create a sustainable future by transforming problematic
                  waste streams into valuable resources and protecting
                  ecosystems from plastic pollution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;