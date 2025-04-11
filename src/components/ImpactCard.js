import React from 'react';

function ImpactCard({ icon, title, metric, metricColor = 'green', subMetric, iconColor = 'green' }) {
  return (
    <div className="card">
      <div className={`icon ${iconColor}`}>{icon}</div>
      <h3>{title}</h3>
      <p className={`metric ${metricColor}`}>{metric}</p>
      {subMetric && <p className="sub-metric">{subMetric}</p>}
    </div>
  );
}

export default ImpactCard;