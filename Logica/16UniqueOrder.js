function uniqueInOrder(str){
  var palabra = str;
   var filter = [];
    var letras = palabra.split("");
    return letras.filter(function(valor, indice) {
     return letras.indexOf(valor) == indice;
  })

  }

  


var palbra2 = "1,2,2,3,3";

uniqueInOrder(palbra2);