// Spotify API credentials
const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';

// Function to fetch Spotify API token
async function fetchSpotifyToken() {
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

// Function to fetch playlist data
async function fetchSpotifyPlaylists(token, mood) {
    const playlistsUrl = `https://api.spotify.com/v1/browse/categories/${mood}/playlists?limit=10`;
    const response = await fetch(playlistsUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.playlists.items;
}

// Optional: Fetch and display playlists dynamically based on the token and mood category
