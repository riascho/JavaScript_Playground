// API Credentials
const clientId = 'f790a166473d45ce94baf0d602ba804a'; // Replace with your Spotify Client ID
const clientSecret = '7a9567d7604842fd8027acd323e488f1'; // Replace with your Spotify Client Secret

// Authorization Variables
let accessToken = null;
let expiresIn = null;

// Artist ID
const artistId = '0OdUWJ0sBjDrqHygGUXeCF';

// API Endpoint for Access Token
const authEndpoint = 'https://accounts.spotify.com/api/token';

// API Endpoint for Top Tracks
const topTracksEndpoint = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;

// Authorization Function
async function getAccessToken() {
    const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

    const response = await fetch(authEndpoint, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    accessToken = data.access_token;
    expiresIn = data.expires_in;
    console.log('Access Token:', accessToken);
}

// Function to Get Top Tracks
async function getTopTracks() {
    // Get access token if not already available
    if (!accessToken) {
        await getAccessToken();
    }

    const response = await fetch(topTracksEndpoint, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    const data = await response.json();
    const topTracks = data.tracks;

    // Log the top tracks
    console.log('Top Tracks:', topTracks);
}

// Call the function to get the artist's top tracks
getTopTracks();
