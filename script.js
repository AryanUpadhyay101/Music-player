// DOM elements
const moodButtons = document.querySelectorAll(".mood-btn");
const spotifyPlayer = document.getElementById("spotify-player");
const moodTitle = document.getElementById("mood-title");

// Mood-based Spotify playlist IDs
const playlists = {
    happy: "37i9dQZF1DXdPec7aLTmlC", // Example Spotify playlist IDs
    sad: "37i9dQZF1DX7qK8ma5wgG1",
    energetic: "37i9dQZF1DX8hY56Fq3fM0",
    calm: "37i9dQZF1DWZd79rJ6a7lp"
};

// Event listener for mood buttons
moodButtons.forEach(button => {
    button.addEventListener("click", async () => {
        const selectedMood = button.getAttribute("data-mood");
        loadPlaylist(selectedMood);
    });
});

// Function to load playlist based on mood
function loadPlaylist(mood) {
    const playlistId = playlists[mood];
    if (playlistId) {
        // Load the playlist into Spotify embed player
        spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
        moodTitle.textContent = `Mood: ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
    } else {
        spotifyPlayer.src = "";
        moodTitle.textContent = "No playlist available for this mood.";
    }
}
