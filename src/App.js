// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import the new HomePage
import PlayerLeaderboardPage from './pages/PlayerLeaderboardPage'; // Import Player page
import TeamLeaderboardPage from './pages/TeamLeaderboardPage'; // Import Team page

// Import the static data (which now reads from players.json internally)
import { siteData } from './data/staticData';

function App() {
  // Destructure data once
  const { overallStats, bowlers, teams } = siteData;

  return (
    <Router> {/* Wrap the entire application in the Router */}
      <div className="App">
        <Header />
        <main className="container">
          <Routes> {/* Define the routes */}
            <Route
              path="/"
              element={
                <HomePage
                  overallStats={overallStats}
                  bowlers={bowlers}
                  teams={teams}
                />
              }
            />
            <Route
              path="/players"
              element={<PlayerLeaderboardPage bowlers={bowlers} />} // Pass bowlers data
            />
            <Route
              path="/teams"
              element={<TeamLeaderboardPage teams={teams} />}   // Pass teams data
            />
            {/* Optional: Add a 404 Not Found route */}
            {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;