// src/components/LeaderboardList.js
import React from 'react';

// Helper component for rendering a leaderboard list
// Accepts items array, type ('bowler' or 'team'), and an optional limit
function LeaderboardList({ items = [], type, limit }) {

  // Determine which items to display (all or limited)
  const displayItems = limit ? items.slice(0, limit) : items;

  if (!displayItems || displayItems.length === 0) {
    return <p>No {type} data available.</p>;
  }

  return (
    <ol className="leaderboard-list">
      {displayItems.map((item) => (
        <li key={item.id}>
          <span className="player-team-name">
            {item.name}
            {/* Show team abbreviation only for bowlers */}
            {type === 'bowler' && <span className="team">({item.team})</span>}
          </span>
          <span className="score">
            {/* Display appropriate icon based on type */}
            {type === 'bowler' ? '[⭐]' : '[🏆]'}
             {/* Format number with commas */}
             {item.totalTrees ? item.totalTrees.toLocaleString() : item.trees.toLocaleString()} Trees
          </span>
        </li>
      ))}
    </ol>
  );
}

export default LeaderboardList;