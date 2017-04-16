function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;
    this.greet = () => `I'm ${this.name} of House ${this.house}`;
}

Wizard.prototype.pet_name;
Wizard.prototype.info = function() {
    return `I have a cute ${this.pet} named ${this.pet_name}`;
};

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = 'Hedwig';

console.log(harry, harry.greet(), harry.info());
