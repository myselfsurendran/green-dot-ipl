// src/pages/PlayerLeaderboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import LeaderboardList from '../components/LeaderboardList'; // Import the shared component

function PlayerLeaderboardPage({ bowlers }) {
  return (
    // Add some padding/margin if needed, or rely on the main container
    <section className="leaderboard-page-section">
      <Link to="/" className="back-link" style={{ display: 'inline-block', marginBottom: '1.5rem', color: '#2563EB', textDecoration: 'none', fontWeight: '500' }}>
        ← Back to Home
      </Link>
      <div className="leaderboard-card"> {/* Reuse card styling for container */}
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Full Player Leaderboard 🌿</h2>
        {/* Use the shared component without a limit */}
        <LeaderboardList items={bowlers} type="bowler" />
      </div>
    </section>
  );
}

export default PlayerLeaderboardPage;