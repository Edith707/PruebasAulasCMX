function bubbleSort(arr) {
    //recorremos todos los elementos del array hasta n-1, este es mi apuntador 1
    for(i=0; i<(arr.length-1); i++)
    // recorremos todos los elementos hasta n-i, este es mi apuntador 2
    for(j=0; j<(arr.length-i); j++){
        //vamos a comparar los elementos de mi apuntador 1 y 2, 
        if(arr[j]>arr[j+1]){
            //si el numero es mayor lo guardamos en un auxiliar
            aux= arr[j];
            // y guardamos el numero en el logar que corresponde 
            arr[j]= arr[j+1];
            ////asignamos el auxiliar en el lugar correspondiente
            arr[j+1]=aux;
        }
    }
    //retornamos el array acomodado
    return arr
}


var arrayUnsorted =[199, 58,32,1212,21212,222, 99, 21,2];

//ejecutamos la funcion 
bubbleSort(arrayUnsorted);

console.log(arrayUnsorted);

