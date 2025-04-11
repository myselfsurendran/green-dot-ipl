import React from 'react';
import MatchCard from '../components/MatchCard';

function RecentUpdates({ matches }) {
  return (
    <section id="updates">
      <h2>Latest Green Matches</h2>
      <div className="grid">
        {matches.slice(0, 3).map((match) => ( // Show latest 3 matches
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
      <a href="#" className="leaderboard-link" style={{ marginTop: '2rem' }}>View All Match Stats →</a>
    </section>
  );
}

export default RecentUpdates;