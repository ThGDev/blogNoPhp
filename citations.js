// Trouvé ici → https://github.com/Gu1ll0m/Projet5_generateur_citations

//création des constantes
const debut = [
    "Y a pas à dire, ",
    "Mon père, il n'était pas ébouriffé, ",
    "C’est vrai ce qu’on dit, ",
    "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe, ",
    "Sur le principe, ",
    "Oui, je sais, ",
    "Au bout d'un moment, ",
    "On se fait couper les deux bras, ",
    "La prochaine fois que vous faites venir un barde, ",
    "Oh, mais c'est pas vrai, ",
    "Merlin, i'sait déjà pas monter des blancs en neige, ",
    "Mais comment voulez-vous que j'vous prouve que j'suis moi, ",
    "De toutes façons, ",
    "Rangez moi ça, débile, "
];

const milieu = [
    "dès qu'il y a du dessert, ",
    "déjà, hein, il avait une coupe à la con mais c'était plutôt aplati et puis il était pas vaporeux, ",
    "vous êtes le fils d’un démon et d’une pucelle ? ",
    "ah non, ça c’est que nous, parce qu’il faut être capable de passer pour des cons en un temps record. ",
    "la Table ronde, ",
    "j'ai arbitré un peu sec, ",
    "il est vraiment druide, c'mec-là, ",
    "on revient vous voir et 5 minutes après on retourne se mettre sur la gueule, ",
    "je lui ouvre le bide de là à là, j'lui sors les boyaux et je file sa langue à bouffer aux chiens, ",
    "une heure que j'crapahute dans tout le château avec ma bougie, ",
    "alors préparer une potion de polymorphie… ",
    "ça devient débile, ",
    "c'est ma mère, ",
    "la table ronde, "
];

const milieu2 = [
    "faut que j'enlève mon armure sinon y va se passer quelque chose d'atroce, ",
    "il serait tout à fait possible que le Graal ne soit ni un vase, ni une coupe, ",
    "je ne me sens pas dans mon assiette, ",
    "vous êtes un grand malade mental, ",
    "l'incident n'a fait aucune victime, ",
    "et nous, pauvres âmes chagrines, nous perdons notre regard dans l'horizon blanc de notre solitude, ",
    "finalement c'est pas des démons, ",
    "c'est juste les pires bestioles de tout l'univers, ",
    "mettons deux gardes là devant et allons boire un coup, ",
    "balancez-leur les radasses et qu'ils s'en aillent au diable, ",
    "ne comptez plus sur moi pour vous amener mes gâteaux à la purée de pomme dont vous êtes si friand, ",
    "je m'occupe d'aller chercher ces petites salopes par la peau du fion, ",
    "je tiens à préciser que l'incident n'a fait aucune victime, ",
    "c'est une catastrophe, "
];

const fin = [
    "le repas est tout de suite plus chaleureux !",
    "voilà ! Allez, au lit !",
    "vous avez plus pris de la pucelle.",
    "ah non, là-dessus on a une avance considérable.",
    "c'est pas obligatoire.",
    "mais en même temps…",
    "ou ça fait quinze ans qu'il me prend pour un con ?",
    "mettez-vous à la place des ennemis, c'est désespérant.",
    "c'est clair, ça ?",
    "ça va bien, maintenant !",
    "permettez-moi d'avoir des doutes.",
    "à la fin !",
    "j'vais pas la faire tabasser par la garde.",
    "c'est pas la fête de l'artisanat !"
];

//=======================================================================================//

// Maintenant, le but, c'est de prendre un item de chaque tableau aléatoirement pour générer une citation.
// Il y a 14 items par tableau
// les tableaux sont : debut - milieu - milieu2 - fin

// Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included)
// Math.floor(Math.random() * 10);
// → https://www.w3schools.com/js/js_random.asp

// je créé une fonction flêchée avec pour argument "nbre", au cas où, plus tard, je rajoute des items à mes tableaux
const citationAleatoire = (nbre) => {
    const random1 = Math.floor(Math.random() * nbre);
    const random2 = Math.floor(Math.random() * nbre);
    const random3 = Math.floor(Math.random() * nbre);
    const random4 = Math.floor(Math.random() * nbre);

    document.querySelector('p#citation').innerHTML = `<p>${debut[random1]}${milieu[random2]}${milieu2[random3]}${fin[random4]}<br /><strong><em>- Kaamelott -</em></strong></p>`;
}
citationAleatoire(14);