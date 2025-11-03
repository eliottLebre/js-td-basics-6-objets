/*****************************
 * 030 - OBJETS + BOUCLES + TESTS + FONCTIONS - CODING CHALLENGE 5
 */

/*
Vous vous souvenez du challenge du calculateur de pourboire ?
Créons une version plus avancée en utilisant tout ce que nous avons appris !

Cette fois, John et sa famille sont allés dans 5 restaurants différents.
Les factures ont été de $124, $48, $268, $180 et $42.
John aime laisser un pourboire de 20% quand la facture est inférieure à $50,
15% quand la facture est entre $50 et $200, et 10% si la facture est plus de $200.

Implémente un calculateur de pourboire en utilisant les objets et les boucles.
1. Crée un objet avec un tableau pour les montants des factures
2. Ajoute une méthode pour calculer le pourboire
3. Cette méthode devrait inclure une boucle pour itérer à travers toutes les factures payées
    et faire le calcul du pourboire
4. En sortie, crée
    1°) un nouveau tableau qui contient toutes les factures
    2°) un tableau qui contient les montants finaux payés (facture + pourboire).
AIDE : Commence avec deux tableaux vides en tant que propriétés
        et remplis-les dans la boucle

BONUS (EXTRA) APRÈS AVOIR FINI :

La famille de Mark est aussi partie en vacances, et est allée dans 4 restaurants différents.
Les factures ont été de $77, $375, $110, et $45.
Mark aime laisser un pourboire de 20% quand la facture est moins de $100,
10% pour une facture entre $100 et $300, et 25% pour une facture de plus de $300
(différent de John).

5. Implémente les mêmes fonctionnalités qu'avant, cette fois avec les règles de pourboire de Mark.
6. Crée une fonction (pas une méthode) pour calculer la moyenne d'un tableau de pourboires donné.
INDICE : Boucle sur le tableau et, à chaque itération, stocke la somme courante dans une variable
(en commençant à 0). Une fois que tu as la somme du tableau, divise-la par le nombre d'éléments
du tableau (c'est comme cela qu'on calcule une moyenne).
7. Calcule le pourboire moyen pour chaque famille
8. Affiche qui a payé le pourboire le plus élevé en moyenne.

BONNE CHANCE 😀
*/
let pourboirPaid = [];
let facturesPaid = [];

const factures= {
    montants: [124, 48, 268, 180, 42],
    pourboir(){
        for (const montant of this.montants) {
            if (montant < 50){
                pourboirPaid.push(montant / 5);
                facturesPaid.push(montant + montant / 5)
            } else if (montant > 200){
                pourboirPaid.push(montant / 10);
                facturesPaid.push(montant + montant / 10)
            } else {
                pourboirPaid.push(montant / 100 * 15);
                facturesPaid.push(montant + montant / 100 * 15)
            }
        }
    }
}

factures.pourboir();
console.log(pourboirPaid);
console.log(facturesPaid);



let pourboirPaidMark = [];
let facturesPaidMark = [];
const facturesMark= {
    montants: [77, 375, 110, 45],
    pourboir(){
        for (const montant of this.montants) {
            if (montant < 100){
                pourboirPaidMark.push(montant / 5);
                facturesPaidMark.push(montant + montant / 5)
            } else if (montant > 300){
                pourboirPaidMark.push(montant / 4);
                facturesPaidMark.push(montant + montant / 4)
            } else {
                pourboirPaidMark.push(montant / 10);
                facturesPaidMark.push(montant + montant / 10)
            }
        }
    }
}

let avg = 0;
function avgPourboir() {
    for (const montant of facturesMark.montants) {
        avg += montant;
    }
    avg = avg / facturesMark.montants.length;
}

facturesMark.pourboir();
console.log(pourboirPaidMark);
console.log(facturesPaidMark);

avgPourboir();
console.log(avg);