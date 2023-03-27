function isPalindrome(x){
      cadena = x.toLowerCase();
      if(cadena === ""){
          return true;
   }
      for(let i = 0; i < cadena.length / 2; i++){
       if(cadena[i] !== cadena[cadena.length - 1 -i]){
          return false;
    }
        return true;
  }
}
  console.log(isPalindrome("a"));
  console.log(isPalindrome("aba"));
  console.log(isPalindrome("Abba"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("Bob"));
  console.log(isPalindrome("Madam"));
  console.log(isPalindrome("AbBa"));
  console.log(isPalindrome(""));