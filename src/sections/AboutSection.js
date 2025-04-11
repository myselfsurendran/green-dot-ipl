import React from 'react';

function AboutSection() {
  return (
    <section id="about">
      <h2>Be Part of the Green Movement</h2>
      <p>
        GreenDot IPL celebrates cricket while promoting environmental awareness. Each dot ball contributes to reforestation efforts, turning runs saved into roots planted.
      </p>
      <div className="cta-buttons">
        <button className="cta-button primary">Learn More</button>
        <button className="cta-button secondary">[🔗] Share Impact</button> {/* Share Icon Placeholder */}
      </div>
    </section>
  );
}

export default AboutSection;