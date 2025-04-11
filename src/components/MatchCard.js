import React from 'react';

function MatchCard({ match }) {
  const { team1, team2, date, trees, venue, ecoMatch } = match;
  return (
    <div className="card"> {/* Reuse card styling */}
      <p className="match-date">{date}</p>
      <h4>{team1} vs {team2}</h4>
      {venue && <p className="sub-metric" style={{marginBottom: '0.5rem'}}>{venue}</p>}
      <p className="trees-planted">
        [🌳] {trees} Trees Planted {ecoMatch && <span style={{ color: '#F59E0B', fontWeight: 'bold' }}>(Eco-Match!)</span>}
      </p>
      <a href="#" className="match-link">Match Details →</a>
    </div>
  );
}

export default MatchCard;