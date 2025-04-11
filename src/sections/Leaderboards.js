// src/sections/Leaderboards.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import LeaderboardList from '../components/LeaderboardList'; // Import the shared component

function Leaderboards({ bowlers, teams }) {
  return (
    <section id="leaderboards">
      <h2>Eco Champions: Top Contributors</h2>
      <div className="grid">
        {/* Top Bowlers */}
        <div className="leaderboard-card">
          <h3>Top Bowlers (Most Trees) 🌿</h3>
          {/* Use the shared component with a limit */}
          <LeaderboardList items={bowlers} type="bowler" limit={5} />
          {/* Use Link for navigation */}
          <Link to="/players" className="leaderboard-link">
            View Full Player Leaderboard →
          </Link>
        </div>

        {/* Top Teams */}
        <div className="leaderboard-card">
          <h3>Top Teams (Most Trees) 🌴</h3>
          {/* Use the shared component with a limit */}
          <LeaderboardList items={teams} type="team" limit={5} />
          {/* Use Link for navigation */}
          <Link to="/teams" className="leaderboard-link">
            View Full Team Leaderboard →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Leaderboards;