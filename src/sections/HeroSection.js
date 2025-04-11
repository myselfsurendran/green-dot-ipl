import React from 'react';

function HeroSection({ totalTrees }) {
  return (
    <section id="hero">
      <h1>Every Dot Ball Plants a Future!</h1>
      <p>Witness how IPL 2025 bowlers are turning dot balls into thriving trees. Follow the green score live!</p>
      <div>
        <span id="totalTreesCounter">{totalTrees.toLocaleString()}</span> {/* Format number */}
        <span className="counter-label">Trees Planted So Far</span>
        <div className="growing-tree-animation">[🌳]</div> {/* Placeholder for animation */}
      </div>
    </section>
  );
}

export default HeroSection;