// Create Object here
// =========================================
let episode = {
    title:"la Première Bataille",
    duration : 45,
    hasBeenWatched: true
}

export { episode }

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`