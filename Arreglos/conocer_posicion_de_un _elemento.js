/* 

    Los lobos han sido reintroducidos en Gran Bretaña. Eres un criador de ovejas y ahora estás plagado de lobos que se hacen pasar por ovejas. 
    Afortunadamente, eres bueno detectándolos. Advierte a la oveja delante del lobo que está a punto de ser comida. Recuerde que está parado al
    frente de la cola que está al final de la matriz:

    [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (ESTÁS AQUÍ AL FRENTE DE LA COLA)
        7      6      5      4      3            2      1

    Si el lobo es el animal más cercano a ti, regresa
    "Pls go away and stop eating my sheep". De lo contrario, regrese
    "Oi! Sheep number N! You are about to be eaten by a wolf!" donde N es la posición de la oveja en la cola.

    Nota: siempre habrá exactamente un lobo en el conjunto.

*/

warnTheSheep = (queue) => {
    let reverseArr = queue.reverse();
    let searchWolf = reverseArr.indexOf('wolf');
    let warninSheep = `Oi! Sheep number ${searchWolf}! You are about to be eaten by a wolf!`;
    if (searchWolf === 0) {
        return 'Pls go away and stop eating my sheep';
    }
    return warninSheep;
}

// return 'Pls go away and stop eating my sheep';
// return `Oi! Sheep number ${searchWolf} You are about to be eaten by a wolf!`;
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["wolf"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
