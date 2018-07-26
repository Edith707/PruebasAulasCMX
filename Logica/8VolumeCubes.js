/*funcion para calcular la diferencia del volumen de dos cubos*/
function volumen(arr1, arr2){
    //calculando los volumenes
    var volumen1 =arr1[0]*arr1[1]*arr1[2];
    var volumen2 = arr2[0]*arr2[1]*arr2[2];
    //escribiendo los volumenes
    console.log(volumen1);
    console.log(volumen2);
    //buscando las diferencia entre los volumenes del cuboA y cuboB
    if(volumen1>volumen2){
      var diference = volumen1-volumen2;
      return diference;
    }else if(volumen1<volumen2){
      var diference = volumen2-volumen1;
      return diference;
    }else {
      var diference = console.log("son iguales");
    }
    
    document.write(diference);
  }
  
  
  var cuboA = [4,6,8];
  var cuboB = [6,6,3];
  volumen(cuboA, cuboB)