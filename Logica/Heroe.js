//definiendo los atributos del heroe
function Heroe(position, health, damage, experience) {
  this.Position = position;
  this.Health = health;
  this.Damage = damage;
  this.Experience = experience;
}
//pasando los argumentos al objeto
var Cloud = new Heroe("00", "100", "5", "0");
//mostrando el heroe definido
console.log(Cloud);


