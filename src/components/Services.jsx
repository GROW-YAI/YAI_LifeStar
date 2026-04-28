import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Collecting and Sorting Plastic Waste',
      description:
        'We begin by collecting plastic waste from urban, industrial, and marine sources. This waste is then meticulously sorted to ensure only recyclable plastics are used in the process.',
    },
    {
      id: 2,
      title: 'Recycling Plastic into Fuel',
      description:
        'Our innovative technology breaks down plastic waste into its fundamental components, converting it into clean, usable energy sources like diesel and petrol. This process is efficient, eco-friendly, and reduces landfill waste.',
    },
    {
      id: 3,
      title: 'Producing and Distributing Clean Fuel',
      description:
        'The final product is high-quality diesel and petrol, ready to power vehicles and machinery. We ensure the fuel meets environmental standards and is distributed to industries and consumers responsibly.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;