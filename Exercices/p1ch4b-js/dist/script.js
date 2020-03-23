let episode = {
  title: 'Dark Beginnings',
  duration: 45,
  hasBeenWatched: false
};

// Create variables here
// =====================================



// =====================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`