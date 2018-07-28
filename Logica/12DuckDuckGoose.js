function duckDuckGoose(persons, gooseNumber){
    if(persons.length >= gooseNumber){
        return persons[gooseNumber -1];
    }else if (gooseNumber % persons.length ===0 ){
        return persons [persons.length -1]
    } else {
        var newGooses = gooseNumber % persons.length;
        return persons[newGooses - 1];
    }
}

console.log(duckDuckGoose(["Bart", "Milhouse", "Lisa", "Rafa"], 5));