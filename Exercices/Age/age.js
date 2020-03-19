
function reponseAge(annee) { 
    if (1 <= annee && annee <= 6) {
        alert('Vous êtes un jeune enfant.'); 
    } else if (7 <= annee && annee <= 11) {
        alert('Vous êtes un enfant qui a atteint l\'âge de raison.'); 
    } else if (12 <= annee && annee <= 17) {
        alert('Vous êtes un adolescent.'); 
    } else if (18 <= annee && annee <= 120) {
        alert('Vous êtes un adulte.'); 
    } else {
        alert('Veuillez entrer un chiffre entre 1 et 120 ...'); 
    } 
}

var age = parseInt(prompt('Quel est votre âge ?'));
reponseAge(age);