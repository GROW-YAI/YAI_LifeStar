import React from 'react';

function Hero() {
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('about');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-contain">
        <h1 className="hero-title">
          Welcome to LifeStar <span className="hero-titleSpan">Innovation</span>
        </h1>
        <p className="hero-subtext">
          Eliminating environmental pollution by recycling plastic waste into
          fuel
        </p>
        <button className="hero-btn">
          <a href="#about" onClick={handleLearnMoreClick}>Learn More</a>
        </button>
      </div>
    </section>
  );
}

export default Hero;