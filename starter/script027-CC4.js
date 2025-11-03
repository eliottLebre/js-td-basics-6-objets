/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const Mark= {
    nom: "Mark",
    poids: 70,
    taille: 190,
    BMI(){
        return this.poids / ((this.taille / 100) * (this.taille / 100))
    }
}
const Jhon= {
    nom: "Jhon",
    poids: 90,
    taille: 160,
    BMI(){
        return this.poids / ((this.taille / 100) * (this.taille / 100))
    }
}
if (Mark.BMI() > Jhon.BMI()){
    console.log(`Mark a le plus grand BMI ${Mark.BMI()}`);
} else {
    console.log(`Jhon a le plus grand BMI ${Jhon.BMI()}`);
}
