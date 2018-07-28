function dryPotates (p1, p2, p3){
    var dry = (100-p1)/100;
    var dry2 = p2 * dry;
    var potate = dry2 / ((100-p3)/100);
    return Math.trunc(potate);
}

dryPotates(99, 100, 98)