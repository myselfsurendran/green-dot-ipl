// src/data/staticData.js

// --- IMPORT RAW DATA ---
// Ensure you have the 'players.json' file in the same directory (src/data/)
// with the raw bowler data in correct JSON format.
import bowlersRawData from './players.json';

// --- CONSTANTS ---
const TREES_PER_DOT_BALL = 500; // Define the conversion factor: 1 dot ball = 500 trees

// --- HARDCODED DATA (Teams and Matches - kept here for now) ---
const teamsData = [
    { id: 'MI', name: 'Mumbai Indians', abbreviation: 'MI'},
    { id: 'GT', name: 'Gujarat Titans', abbreviation: 'GT'},
    { id: 'RR', name: 'Rajasthan Royals', abbreviation: 'RR'},
    { id: 'SRH', name: 'Sunrisers Hyderabad', abbreviation: 'SRH'},
    { id: 'PBKS', name: 'Punjab Kings', abbreviation: 'PBKS'},
    { id: 'RCB', name: 'Royal Challengers Bangalore', abbreviation: 'RCB'},
    { id: 'DC', name: 'Delhi Capitals', abbreviation: 'DC'},
    { id: 'LSG', name: 'Lucknow Super Giants', abbreviation: 'LSG'},
    { id: 'CSK', name: 'Chennai Super Kings', abbreviation: 'CSK'},
    { id: 'KKR', name: 'Kolkata Knight Riders', abbreviation: 'KKR'},
];

// This data isn't directly used in the simplified App.js structure anymore,
// but it's kept here for potential future use or as context for calculations.
const recentMatchesRawData = [
    { id: 25, team1: 'MI', team2: 'CSK', date: 'April 10, 2025', dotBalls: 85, venue: 'Wankhede Stadium'},
    { id: 24, team1: 'RR', team2: 'GT', date: 'April 9, 2025', dotBalls: 92, venue: 'Sawai Mansingh Stadium', ecoMatch: true },
    { id: 23, team1: 'DC', team2: 'LSG', date: 'April 8, 2025', dotBalls: 78, venue: 'Arun Jaitley Stadium' },
    { id: 22, team1: 'PBKS', team2: 'SRH', date: 'April 7, 2025', dotBalls: 81, venue: 'PCA Stadium Mohali'},
];


// --- PROCESSED DATA (Calculations done here using imported bowlersRawData) ---

// Calculate total trees planted based on all dot balls and the conversion factor
const totalTrees = bowlersRawData.reduce((sum, bowler) => {
    // Ensure dotBalls is a number, default to 0 if not
    const dots = Number(bowler.dotBalls) || 0;
    return sum + (dots * TREES_PER_DOT_BALL);
}, 0);

// --- Derive secondary stats based on the total calculated trees ---

// Calculate total land area covered by the planted trees
// Example conversion: Assume 1 planted tree occupies ~3 square meters
const areaPerTree = 3; // square meters
const totalAreaSqM = totalTrees * areaPerTree;
// Convert square meters to hectares (1 Hectare = 10,000 sq m)
const totalAreaHectares = (totalAreaSqM / 10000).toFixed(1); // Format to one decimal place

// Calculate equivalent number of football fields covered
// Approximate area of a FIFA standard football field: ~7140 sq m
const footballFieldArea = 7140;
const equivalentFootballFields = (totalAreaSqM / footballFieldArea).toFixed(1); // Format to one decimal place

// Determine matches covered (using a fixed example value as the match list isn't the primary data source now)
const totalMatchesCovered = 25; // Example fixed value reflecting progress
const totalIPLMatches = 74; // Example total matches in a typical IPL season

// Process individual bowler data: add calculated 'trees' property and sort
const bowlersData = bowlersRawData
    .map(bowler => {
        const dots = Number(bowler.dotBalls) || 0; // Ensure numeric value
        return {
            ...bowler,
            trees: dots * TREES_PER_DOT_BALL, // Apply the conversion factor
        };
    })
    .sort((a, b) => b.trees - a.trees); // Sort bowlers by most trees planted

// Process team data: calculate total trees per team based on their bowlers' dot balls
const teamsProcessedData = teamsData.map(team => {
    // Filter bowlers belonging to the current team and sum their trees
    const teamTotalTrees = bowlersRawData
        .filter(bowler => bowler.team === team.abbreviation)
        .reduce((sum, bowler) => {
            const dots = Number(bowler.dotBalls) || 0; // Ensure numeric value
            return sum + (dots * TREES_PER_DOT_BALL); // Apply conversion factor here too
        }, 0);

    return {
        ...team,
        totalTrees: teamTotalTrees, // Add the calculated total trees for the team
    };
})
.sort((a, b) => b.totalTrees - a.totalTrees); // Sort teams by most trees planted

// Process recent matches data: add calculated 'trees' property (though not used in current App.js)
const recentMatchesData = recentMatchesRawData.map(match => {
    const dots = Number(match.dotBalls) || 0; // Ensure numeric value
    return {
        ...match,
        trees: dots * TREES_PER_DOT_BALL, // Apply conversion factor
    };
});


// --- EXPORTED DATA OBJECT ---
// This object bundles all the calculated and processed data for use in the React components.
export const siteData = {
    overallStats: {
        totalTrees, // Total trees calculated using the 500 factor
        totalAreaHectares,
        equivalentFootballFields,
        totalMatchesCovered, // Static example value
        totalIPLMatches,     // Static example value
        lastUpdated: new Date().toLocaleDateString("en-US", { // Dynamic date for 'last updated' feel
                year: 'numeric', month: 'long', day: 'numeric'
            })
    },
    bowlers: bowlersData,       // Array of bowler objects, each with a 'trees' property (dots * 500)
    teams: teamsProcessedData,  // Array of team objects, each with a 'totalTrees' property
    recentMatches: recentMatchesData // Array of match objects, each with a 'trees' property (dots * 500)
};