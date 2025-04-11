import React from 'react';
import ImpactCard from '../components/ImpactCard';

function ImpactStats({ stats }) {
  const {
    totalTrees,
    totalAreaHectares,
    equivalentFootballFields,
    totalMatchesCovered,
    totalIPLMatches,
    lastUpdated
  } = stats;

  return (
    <section id="impact">
      <h2>Our Collective Green Impact</h2>
       <p style={{ textAlign: 'center', marginTop: '-1rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#6B7280' }}>
        Last Updated: {lastUpdated}
      </p>
      <div className="grid">
        <ImpactCard
          icon="[🌳]"
          title="Total Trees Planted"
          metric={totalTrees.toLocaleString()}
          metricColor="green"
          iconColor="green"
        />
        <ImpactCard
          icon="[🏞️]"
          title="Equivalent Land Area"
          metric={`${totalAreaHectares} Ha`}
          subMetric={`(Approx. ${equivalentFootballFields} Football Fields)`}
          metricColor="blue"
          iconColor="blue"
        />
        <ImpactCard
          icon="[🏏]"
          title="Matches Contributing"
          metric={`${totalMatchesCovered} / ${totalIPLMatches}`}
           subMetric="IPL 2025 Season"
          metricColor="orange"
          iconColor="orange"
        />
      </div>
    </section>
  );
}

export default ImpactStats;