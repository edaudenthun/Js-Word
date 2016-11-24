var bouton = document.getElementById("bouton");
var tableau = document.getElementById("word");
var titre = document.getElementById("titre");
var UserInput = prompt("Saisissez un mot qui vous vient en tête : ");
var mot = UserInput;
titre.style.visibility = "visible";
tableau.style.visibility = "visible";
bouton.style.visibility = "visible";
var cells = tableau.getElementsByTagName("td");
cells[0].innerHTML = '<span class="logo"> # </span> '+ '<span class="couleur">'+  UserInput +'</span>' + '<span class="logo"> # </span> ';
cells[1].innerHTML = '<span class="logo"> # </span> ' + UserInput.toLowerCase()+' <span class="logo"> # </span>';
cells[2].innerHTML = '<span class="logo"> # </span> ' + UserInput.toUpperCase() + '<span class="logo"> # </span> ';


var voyelle = 0;
var consonne = 0;

for (var i = 0; i < mot.length; i++) {
  mot = mot.toLowerCase();
  mot = mot.split(" ").join("");
  if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") {
    voyelle++;
  } else {
    consonne++;
  }
}
cells[3].innerHTML = '<span class="logo"> # </span> ' + "Il y a " + voyelle + " voyelles et " + consonne + " consonnes." + '<span class="logo"> # </span> ';


var motrev = "";

//Première possibilité :
// for (var j = 0; j < mot.length ; j++) {
//   motrev += mot[mot.length - j - 1; //-(j+1)];
// }

//Deuxième possibilité :
for (var j = mot.length-1; j >= 0 ; j--) {
  motrev += mot[j];
}
cells[4].innerHTML = '<span class="logo"> # </span> ' + motrev + '<span class="logo"> # </span> ';

// Troisième possibilité :
// motrev = mot.split("");
// motrev.reverse();
// motrev = motrev.join("");



if (mot == motrev) {
  cells[5].innerHTML = '<span class="logo"> # </span> ' + "Ce mot est un palindrome" + '<span class="logo"> # </span> ';
} else {
  cells[5].innerHTML = '<span class="logo"> # </span> ' + "Ce mot n'est pas un palindrome" + '<span class="logo"> # </span> ';
}

function reset() {
bouton = location.reload();

}
