function removeSign (str){
    var remove = str.split("!").join("")
    var add  = "!";

    return remove + add;
}

removeSign("Hi!!!!!");