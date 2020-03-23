let episode = {
  title: 'Dark Beginnings',
  duration: 45,
  hasBeenWatched: false
};

// Create variables here
// =====================================
let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.HasBeenWatched;

// =====================================

export { episodeTitle, episodeDuration, episodeHasBeenWatched };

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`