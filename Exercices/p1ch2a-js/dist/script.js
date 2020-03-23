// Create your variables here
// ==========================================
let numberOfSeasons = 6;
let numberOfEpisodes = 12;


// ==========================================
export { numberOfSeasons, numberOfEpisodes };

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`