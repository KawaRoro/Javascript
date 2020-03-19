var prenoms = [];
var prenom = "";

while (prenom = prompt('Entrez un prénom :')) {
    prenoms.push(prenom); // Ajoute le nouveau prénom ainsi qu'un espace
} 

if (prenoms.length > 0) {
     alert(prenoms.join(' '));
} else {
    alert('Raté'); 
}
