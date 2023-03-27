/*
Nota Dependiendo del Promedio
*/
function getGrade (s1, s2, s3) { 
    let suma = s1 + s2 + s3; 
    let promedio = (suma / 3); 
    let nota = ''; 
    if(promedio >= 90) { 
        nota = 'A'; 
    }else if(promedio >= 80){ 
        nota = 'B'; 
    }else if(promedio >= 70){ 
        nota = 'C'; 
    }else if(promedio >= 60){
        nota = 'D'; 
    }else { 
        nota = 'F'; 
    } 
    return nota; 
} 
console.log(getGrade(95,90,93));