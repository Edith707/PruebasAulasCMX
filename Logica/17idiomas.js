var language = {
    englis: "Welcome",
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
}; 

var select = prompt("ingrese select");


function selectLanguage ( selector, obj ){
  
     if( selector === 'english'){
       return language.englis
     } else if(selector==="czech") {
       return language.czech
     }else if (selector==="danish"){
       return language.danish
     }else if(selector==="dutch") {
       return language.dutch
     }else if (selector==="estonian"){
       return language.estonian
     }else if(selector==="finnish") {
       return language.finnish
     }else if (selector==="flemish"){
       return language.flemish
     }else if(selector==="french") {
       return language.french
     }else if (selector==="german"){
       return language.german
     }else if(selector==="irish") {
       return language.irish
     }else if (selector==="italian"){
       return language.italian
     }else if(selector==="latvian") {
       return language.latvian
     }else if (selector==="lithuanian"){
       return language.lithuanian
     }else if(selector==="polish") {
       return language.polish
     }else if (selector==="spanish"){
       return language.spanish
     }else if(selector==="swedish") {
       return language.swedish
     }else if (selector==="welsh"){
       return language.welsh
     }else if (selector ==="IP_ADDRESS_INVALID"){
       return console.log("not a valid ipv4 or ipv6 ip address");
     }else if (selector === "IP_ADDRESS_NOT_FOUND") {
       return console.log("ip address not in the database");
     } else  if (selector === "IP_ADDRESS_REQUIRED") {
       return console.log("no ip address was supplied")
     } else {
       return console.log("dato invalido")
     }
     
}

selectLanguage( select, language);