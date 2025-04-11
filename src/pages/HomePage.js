// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../sections/HeroSection';
import ImpactStats from '../sections/ImpactStats';
import Leaderboards from '../sections/Leaderboards';

function HomePage({ overallStats, bowlers, teams }) {
  return (
    <> {/* Use Fragment to avoid unnecessary div */}
      <HeroSection totalTrees={overallStats.totalTrees} />
      <ImpactStats stats={overallStats} />
      <Leaderboards bowlers={bowlers} teams={teams} />
    </>
  );
}

export default HomePage;