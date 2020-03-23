// Create variables here
// =========================================
let episodeTitle = 'La Première Bataille';
let episodeDuration = 45;
let hasBeenWatched = false;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`