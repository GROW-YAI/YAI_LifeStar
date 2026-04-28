import React from 'react';

function Products() {
  return (
    <section id="products" className="products-section">
      <h2>Some of Our Products and Processes</h2>
      <p className="description">
        A demonstration of how plastic waste is recycled into fuel and some of
        its products
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <div className="media-wrapper">
            <video controls className="media-content">
              <source
                src="/assets/media/WhatsApp Video 2025-02-25 at 14.27.32_b02815d5.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="grid-item">
          <div className="media-wrapper">
            <img
              src="/assets/media/WhatsApp Image 2025-02-25 at 12.01.23_4037a6e6.jpg"
              alt="Product Image"
              className="media-content"
            />
          </div>
        </div>
        <div className="grid-item">
          <div className="media-wrapper">
            <img
              src="/assets/media/WhatsApp Image 2025-02-25 at 12.01.26_e555e4ab.jpg"
              alt="Product Image"
              className="media-content"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;