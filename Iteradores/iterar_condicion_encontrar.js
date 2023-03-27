/*
Encontrar la Palabra "needle" y la posición en la que se encuentra
*/
function findNeedle(haystack) {
  for(let i = 0; i < haystack.length; i++){
    if(haystack[i] === "needle"){
     let result = "found the needle at position " + [i]
     return result;
    }
  }
  return false;
}
console.log(findNeedle(["hay", "junk", "hay", "needle", "hay", "moreJunk", "randomJunk"]));
// found the needle at position 3