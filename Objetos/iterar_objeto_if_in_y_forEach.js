/*
  El BA de su nueva empresa le ha dicho a marketing que su sitio web tiene una gran audiencia en Escandinavia y los países vecinos. Marketing cree que sería fantástico dar la bienvenida a los visitantes del sitio en su propio idioma. Afortunadamente, ya usa una API que detecta la ubicación del usuario, por lo que es una victoria fácil. La tarea Piense en una forma de almacenar los idiomas como una base de datos (por ejemplo, un objeto). ¡Los idiomas se enumeran a continuación para que pueda copiar y pegar! Escriba una función de 'bienvenida' que tome un parámetro 'idioma' (siempre una cadena) y devuelva un saludo, si lo tiene en su base de datos. Debería estar predeterminado en inglés si el idioma no está en la base de datos, o en el caso de una entrada no válida.
*/

let objIdioma = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  
  
  function greet(language) {
   if(language in objIdioma){
    return objIdioma[language];
   }else{
    return objIdioma['english'];
   }
  }
  console.log(greet('IP_ADDRESS_INVALID')); // Welcome
  
  
  function greet(language) {
    saludar = "";
    arrIdioma =  Object.keys(objIdioma);
    arrIdioma.forEach(elemento => {
      //console.log("obj: " + language + " = " + objIdioma[elemento]);
     if(elemento === language){
      saludar = objIdioma[elemento];
     }
  });
  if(saludar === ''){
    saludar = objIdioma.english;
  }
  return saludar;
  }
  console.log(greet('spanish')); // Bienvenido
  