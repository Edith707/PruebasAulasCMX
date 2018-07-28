var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

var array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

function filter (arr, goose){
 var geeses = goose;
 return arr.filter( g => !geeses.includes(g));

};

filter(array, geese);

